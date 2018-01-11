// JavaScript Document
console.log("Starting.");

var pageLoadPrevention = true;

$(document).ready(function generateYML() {

	$("#lore").on("keypress", "input", function loreKeypress() {

		if ($(this).val() !== "" && $(this).attr('id') === "ItemLore") {

			//make sure ID is unique
			$(".lore").removeAttr('id');

			//make new entry
			$(".loreHolder:first").clone().appendTo($("#lore"));

			//wipe field input
			$(".loreHolder:last").find("input").val('');

			//give new entry ID
			$(".lore:last").attr('id', "ItemLore");
			
		}

		ElementCounter($(".lore"));

	});

	$("#enchantments").on("change", "select", function enchantmentClick() {

		//if the selected value is not null, add a row
		if ($(this).val() !== "") {

			//make sure ID is unique
			$(".enchantmentsList").removeAttr('id');

			//make new entry
			$(".enchantments:first").clone().appendTo($("#enchantments"));

			//wipe amplifier input
			$(".enchantments:last").find("input").val('');

			//give new entry ID
			$(".enchantmentsList:last").attr('id', "enchantmentsList");

		}

		ElementCounter($(".enchantmentsList"));

	});

	$("#potionEffects").on("change", "select", function potionEffectClick() {

		if ($(this).val !== "") {

			//make sure ID is unique
			$(".potionEffectList").removeAttr('id');

			//make new entry
			$(".potionEffects:first").clone().appendTo($("#potionEffects"));

			//wipe amplifier input
			$(".potionEffects:last").find("input").val('');

			//give new entry ID
			$(".potionEffectList:last").attr('id', "potionEffectList");

		}

		ElementCounter($(".potionEffectList"));

	});

	document.getElementById("submitButton").onclick = function clicked() {

		if ($("#ItemName").val() !== "" && $("#ItemType").val() !== "" && $("#ItemDisplayName").val() !== "" && $(".lore").val() !== "") {

			pageLoadPrevention = false;

			$("#container").css("text-align", "center");
			$("#reload").append("<textarea id='#textArea' rows='20' cols='40'></textarea>");
			var ta = $("textArea");
			
			var itemType = $("#ItemType").val(function(i, val){
				return val.toUpperCase();
			});

			ItemNameCreator("#ItemName");
			ItemTypeCreator("Item Type", itemType);
			ItemDisplayNameCreator("Item Name", "#ItemDisplayName");
			ItemLoreCreator();
			EnchantmentsCreator();
			PotionEffectCreator();

			ta.val("  " + $.trim($("#tempStorage").text()));

			ta.focus();
			ta.select();

			$("#reload").append("<br><input type='submit' value='Again!' id='again'>");

			$("#inputContainer").html("");

		} else {

			alert("Missing required fields!");
		}

	};

	$("#reload").on("click", "input", function reloadPage() {

		location.reload();

	});

	$("#colorCodes").click(function showColorCodes() {

		if ($(".colorCode").css("visibility") === "visible") {

			$(".colorCode").css("visibility", "hidden");

		} else {

			$(".colorCode").css("visibility", "visible");

		}

	});

});

function ElementCounter(selectedElement) {

	var count = 0;

	$(selectedElement).each(function () {

		console.log($(this).val());

		if ($(this).val() === "") {

			count++;

		}

	});

	if (count > 1) {

		$(selectedElement).each(function () {

			if (count > 1 && $(this).val() === "") {

				count--;
				$(this).parent().remove();

			}

		});

	}

}

function ItemNameCreator(textNode) {

	if (pageLoadPrevention) {

		return;

	} else {

		//yml spacing is 2
		var text = "  " + $(textNode).val() + ":\r\n";

		console.log(text);

		$("#tempStorage").append(text);

	}

}

function ItemTypeCreator(textNode1, textNode2) {

	if (pageLoadPrevention) {

		return;

	} else {

		//yml spacing is 4
		var text = "    " + textNode1 + ": " + $(textNode2).val() + "\r\n";

		console.log(text);

		$("#tempStorage").append(text);

	}

}

function ItemDisplayNameCreator(textNode1, textNode2) {

	if (pageLoadPrevention) {

		return;

	} else {

		//yml spacing is 4
		var text = "    " + textNode1 + ": \"" + $(textNode2).val() + "\"\r\n";

		console.log(text);

		$("#tempStorage").append(text);

	}

}

function ItemLoreCreator() {

	if (pageLoadPrevention) {

		return;

	} else {

		//yml spacing is 4
		$("#tempStorage").append("    Item Lore:" + "\r\n");

		$(".lore").each(function () {

			if ($(this).val() !== '') {

				var text = "    - \"" + $(this).val() + "\"\r\n";

				console.log(text);

				$("#tempStorage").append(text);

			}

		});


	}

}

function EnchantmentsCreator() {

	if (pageLoadPrevention) {

		return;

	} else {

		//yml spacing is 4
		$("#tempStorage").append("    Enchantments:" + "\r\n");

		$(".enchantments").each(function () {

			if ($(this).find("select").val() !== '') {

				var text = "    - " + $(this).find("select").val() + "," + $(this).find("input").val();

				console.log(text);

				$("#tempStorage").append(text + "\r\n");

			}

		});

	}

}

function PotionEffectCreator() {

	if (pageLoadPrevention) {

		return;

	} else {

		//yml spacing is 4
		$("#tempStorage").append("    Potion Effects:" + "\r\n");

		$(".potionEffects").each(function () {

			if ($(this).find("select").val() !== '') {

				if ($(this).find("select").val() !== '') {

					var text = "    - " + $(this).find("select").val() + "," + $(this).find("input").val();

					console.log(text);

					$("#tempStorage").append(text + "\r\n");

				}

			}

		});

	}

}
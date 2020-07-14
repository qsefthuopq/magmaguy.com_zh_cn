let effects = [
    "ASH",
    "BARRIER",
    "BLOCK_CRACK",
    "BLOCK_DUST",
    "BUBBLE_COLUMN_UP",
    "BUBBLE_POP",
    "CAMPFIRE_COSY_SMOKE",
    "CAMPFIRE_SIGNAL_SMOKE",
    "CLOUD",
    "COMPOSTER",
    "CRIMSON_SPHERE",
    "CRIT",
    "CRIT_MAGIC",
    "CURRENT_DOWN",
    "DAMAGE_INDICATOR",
    "DOLPHIN",
    "DRAGON_BREATH",
    "DRIP_LAVA",
    "DRIP_WATER",
    "DRIPPING_HONEY",
    "DRIPING_OBSIDIAN_TEAR",
    "FALLING_WATER",
    "FIREWORKS_SPARK",
    "FLAME",
    "FLASH",
    "HEART",
    "ITEM_CRACK",
    "LANDING_HONEY",
    "LANDING_LAVA",
    "LANDING_OBISIDIAN_LAVA",
    "LAVA",
    "MOB_APPEARANCE",
    "NAUTILUS",
    "NOTE",
    "PORTAL",
    "REDSTONE",
    "REVERSE_PORTAL",
    "SLIME",
    "SMOKE_LARGE",
    "SNEEZE",
    "SNOW_SHOVEL",
    "SNOWBALL",
    "SOUL",
    "SOUL_FIRE_FLAME",
    "SPELL",
    "SPELL_INSTANT",
    "SPELL_MOB",
    "SPELL_WITCH",
    "SPIT",
    "SQUID_INK",
    "SUSPENDED",
    "SUSPENDED_DEPTH",
    "SWEEP_ATTACK",
    "TOTEM",
    "TOWN_AURA",
    "VILLAGER_ANGRY",
    "WARPED_SPORE",
    "WATER_BUBBLE",
    "WATER_SPLASH",
    "WATER_WAVE",
    "WHITE_ASH"
]

window.addEventListener('load', function () {
    addStringLine(document.getElementById("lootList"));
    addStringLine(document.getElementById("mimicCustomBossesList"));
    addStringLineWithAutoComplete(document.getElementById("effects"), effects);
})

function generateTreasureChest() {
    let config = "";

    config += getString("isEnabled");
    config += getString("chestType");
    config += getString("facing");
    config += getString("dropStyle");
    config += getString("restockTimer");
    config += getStringList("lootList");
    config += getString("mimicChance");
    config += getStringList("lootList");
    config += getStringList("effects");
    config += getString("location")

    let outputDisplay = document.getElementById("output");
    outputDisplay.innerText = config;
	
	download(`${treasure_chest.yml`, config);
}

function treasureChestLinkFactory(id) {
    window.open("https://github.com/MagmaGuy/EliteMobs/wiki/%5BGuide%5D-Creating-Treasure-Chests#" + id);
}
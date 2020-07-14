let entityTypes = [
    "BLAZE",
    "CAVE_SPIDER",
    "CREEPER",
    "DROWNED",
    "ELDER_GUARDIAN",
    "ENDERMAN",
    "EVOKER",
    "GUARDIAN",
    "HUSK",
    "ILLUSIONER",
    "IRON_GOLEM",
    "PHANTOM",
    "PILLAGER",
    "POLAR_BEAR",
    "RAVAGER",
    "SILVERFISH",
    "SKELETON",
    "SPIDER",
    "STRAY",
    "VEX",
    "VINDICATOR",
    "WITCH",
    "WITHER_SKELETON",
    "ZOMBIE",
    "ZOMBIFIED_PIGLIN"
]

let trails = [
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

let helmet = [
    "NETHERITE_HELMET",
    "DIAMOND_HELMET",
    "IRON_HELMET",
    "GOLDEN_HELMET",
    "CHAIN_HELMET",
    "LEATHER_HELMET"
]

let chestplate = [
    "NETHERITE_CHESTPLATE",
    "DIAMOND_CHESTPLATE",
    "IRON_CHESTPLATE",
    "GOLDEN_CHESTPLATE",
    "CHAIN_CHESTPLATE",
    "LEATHER_CHESTPLATE"
]

let leggings = [
    "NETHERITE_LEGGINGS",
    "DIAMOND_LEGGINGS",
    "IRON_LEGGINGS",
    "GOLDEN_LEGGINGS",
    "CHAIN_LEGGINGS",
    "LEATHER_LEGGINGS"
]

let boots = [
    "NETHERITE_BOOTS",
    "DIAMOND_BOOTS",
    "IRON_BOOTS",
    "GOLDEN_BOOTS",
    "CHAIN_BOOTS",
    "LEATHER_BOOTS"
]

let offhand = mainHand = [
    "NETHERITE_SWORD",
    "NETHERITE_AXE",
    "NETHERITE_HOE",
    "NETHERITE_PICKAXE",
    "NETHERITE_SHOVEL",
    "DIAMOND_SWORD",
    "DIAMOND_AXE",
    "DIAMOND_HOE",
    "DIAMOND_PICKAXE",
    "DIAMOND_SHOVEL",
    "IRON_SWORD",
    "IRON_AXE",
    "IRON_HOE",
    "IRON_PICKAXE",
    "IRON_SHOVEL",
    "GOLDEN_SWORD",
    "GOLDEN_AXE",
    "GOLDEN_HOE",
    "GOLDEN_PICKAXE",
    "GOLDEN_SHOVEL",
    "STONE_SWORD",
    "STONE_AXE",
    "STONE_HOE",
    "STONE_PICKAXE",
    "STONE_SHOVEL"
]

window.addEventListener('load', function () {
    autocomplete(document.getElementById("entityType"), entityTypes);
    autocomplete(document.getElementById("trails"), trails);
    autocomplete(document.getElementById("helmet"), helmet);
    autocomplete(document.getElementById("chestplate"), chestplate);
    autocomplete(document.getElementById("leggings"), leggings);
    autocomplete(document.getElementById("boots"), boots);
    autocomplete(document.getElementById("mainHand"), mainHand);
    autocomplete(document.getElementById("offHand"), offhand);
    addStringLine(document.getElementById("onDamagedMessage"));
    addStringLine(document.getElementById("onDamageMessage"));
    addStringLine(document.getElementById("onDeathCommands"));
    addStringLine(document.getElementById("uniqueLootList"));
    addStringLine(document.getElementById("trails"));
    addStringLine(document.getElementById("summonPowers"));

    new MultipleSelect('#powers', {
        placeholder: 'Select Powers'
    })
})


function generateRegionalBoss() {

    let config = sharedConfigFeatures();

    config += "isRegionalBoss: true\n";
    config += "isPersistent: true\n";


    let outputDisplay = document.getElementById("output");
    outputDisplay.innerText = config;
}

function generateCustomBoss() {

    let config = sharedConfigFeatures();
    config += getString("isPersistent");
    config += getString("spawnChance");
    console.log(config);

    let outputDisplay = document.getElementById("output");
    outputDisplay.innerText = config;

}

function sharedConfigFeatures() {
    let config = "";
    config += getString("isEnabled");
    config += getString("entityType");
    config += getString("name");
    config += getString("level");
    config += getString("timeout");
    config += getString("healthMultiplier");
    config += getString("damageMultiplier");
    config += getString("helmet");
    config += getString("chestplate");
    config += getString("leggings");
    config += getString("boots");
    config += getString("mainHand");
    config += getString("offHand");
    config += getString("isBaby");
    config += getPowers("powers");
    config += getString("spawnMessage");
    config += getString("deathMessage");
    config += getString("escapeMessage");
    config += getString("locationMessage");
    config += getStringList("uniqueLootList");
    config += getString("dropsEliteMobsLoot");
    config += getString("dropsVanillaLoot");
    config += getStringList("trails");
    config += getStringList("onDamageMessage");
    config += getStringList("onDamagedMessage");
    config += getString("mountEntity");
    config += getString("announcementPriority");
    config += getString("followDistance");
    config += getStringList("onDeathCommands");
    return config;
}

function getPowers(id) {
    var stringList = id + ":\n";
    let checkSum = id + ":\n";
    Array.from(document.getElementById("powers").options).forEach((element) => {
        if (element.selected) {
            stringList += "- " + element.value + "\n";
        }
    });
    if (getStringList("summonPowers") !== "")
        stringList += getStringList("summonPowers").split("summonPowers:\n")[1];
    if (stringList === checkSum)
        return "";
    return stringList
}

function regionalBossLinkFactory(id) {
    window.open("https://github.com/MagmaGuy/EliteMobs/wiki/%5BGuide%5D-Creating-World-Bosses#" + id);
}

function customBossLinkFactory(id) {
    switch (id) {
        case "leggings":
        case "boots":
        case "helmet":
        case "mainHand":
        case "offHand":
            window.open("https://github.com/MagmaGuy/EliteMobs/wiki/%5BGuide%5D-Creating-Custom-Bosses#helmetchestplateleggingsbootsmainhandoffhand");
            return
        case "summonPower":
            window.open("https://github.com/MagmaGuy/EliteMobs/wiki/%5BMechanic%5D-All-Elite-Powers#summon-power");
            return;
        default:
            window.open("https://github.com/MagmaGuy/EliteMobs/wiki/%5BGuide%5D-Creating-Custom-Bosses#" + id);
    }
}
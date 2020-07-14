let enchantments = [
    "ARROW_DAMAGE,1",
    "ARROW_FIRE,1",
    "ARROW_INFINITE,1",
    "ARROW_KNOCKBACK,1",
    "BINDING_CURSE,1",
    "CHANNELING,1",
    "CRITICAL_STRIKES,1",
    "DAMAGE_ALL,1",
    "DAMAGE_ARTHROPODS,1",
    "DAMAGE_UNDEAD,1",
    "DEPTH_STRIDER,1",
    "DIG_SPEED,1",
    "DRILLING,1",
    "DURABILITY,1",
    "FIRE_ASPECT,1",
    "FLAMETHROWER,1",
    "FROST_WALKER,1",
    "HUNTER,1",
    "ICE_BREAKER,1",
    "IMPALING,1",
    "KNOCKBACK,1",
    "LOOT_BONUS_BLOCKS,1",
    "LOOT_BONUS_MOBS,1",
    "LOYALTY,1",
    "LUCK,1",
    "LURE,1",
    "MENDING,1",
    "METEOR_SHOWER,1",
    "MULTISHOT,1",
    "OXYGEN,1",
    "PIERCING,1",
    "PROTECTION_ENVIRONMENTAL,1",
    "PROTECTION_EXPLOSIONS,1",
    "PROTECTION_FALL,1",
    "PROTECTION_FIRE,1",
    "PROTECTION_PROJECTILE,1",
    "QUICK_CHARGE,1",
    "RIPTIDE,1",
    "SILK_TOUCH,1",
    "SOULBIND,1",
    "SWEEPING_EDGE,1",
    "THORNS,1",
    "VANISHING_CURSE,1",
    "WATER_WORKER,1"
]

let potionEffects = [
    "ABSORPTION,0,self,continuous",
    "BLINDNESS,0,target,onHit",
    "CONDUIT,0,self,continuous",
    "CONFUSION,0,target,onHit",
    "DAMAGE_RESISTANCE,0,self,onHit",
    "DOLPHINS_GRACE,0,self,continuous",
    "FAST_DIGGING,0,self,continuous",
    "FIRE_RESISTANCE,0,self,continuous",
    "GLOWING,0,target,onHit",
    "HARM,0,target,onHit",
    "HEAL,0,self,onHit",
    "HEALTH_BOOST,0,self,continuous",
    "HUNGER,0,target,onHit",
    "INCREASE_DAMAGE,0,self,onHit",
    "INVISIBILITY,0,self,onHit",
    "JUMP,0,self,continuous",
    "LEVITATION,0,target,onHit",
    "LUCK,0,self,continuous",
    "NIGHT_VISION,0,self,continuous",
    "POISON,0,target,onHit",
    "REGENERATION,0,self,continuous",
    "SATURATION,0,self,continuous",
    "SLOW,0,target,onHit",
    "SLOW_DIGGING,0,target,onHit",
    "SLOW_FALLING,0,self,continuous",
    "SPEED,0,self,continuous",
    "UNLUCK,0,target,onHit",
    "WATER_BREATHING,0,self,continuous",
    "WEAKNESS,0,target,onHit",
    "WITHER,0,target,onHit"
]

window.addEventListener('load', function () {
    addStringLine(document.getElementById("lore"));
    addStringLineWithAutoComplete(document.getElementById("enchantments"), enchantments);
    addStringLineWithAutoComplete(document.getElementById("potionEffects"), potionEffects);
})

function generateCustomItem() {
    let config = "";
    config += getString("isEnabled");
    config += getString("name");
    config += getStringList("lore");
    config += getStringList("enchantments");
    config += getStringList("potionEffects");
    config += getString("dropWeight");
    config += getString("scalability");
    config += getString("itemType");

    let outputDisplay = document.getElementById("output");
    outputDisplay.innerText = config;

	download(`${getValue("name")}.yml`, config);
}

function customItemLinkFactory(id) {
    window.open("https://github.com/MagmaGuy/EliteMobs/wiki/[Guide]-Creating-custom-loot#" + id);
}
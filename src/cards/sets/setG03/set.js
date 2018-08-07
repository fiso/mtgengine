"use strict";
module.exports = {
  ArgothianEnchantress: require("./ArgothianEnchantress"),
  Intuition: require("./Intuition"),
  LivingDeath: require("./LivingDeath")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setG03 = module.exports;}
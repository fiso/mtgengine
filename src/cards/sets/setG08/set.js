"use strict";
module.exports = {
  DemonicTutor: require("./DemonicTutor"),
  GoblinPiledriver: require("./GoblinPiledriver"),
  LivingWish: require("./LivingWish"),
  MindsDesire: require("./MindsDesire"),
  OrimsChant: require("./OrimsChant")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setG08 = module.exports;}
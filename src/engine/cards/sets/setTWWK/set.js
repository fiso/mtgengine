"use strict";
module.exports = {
  Construct: require("./Construct"),
  Dragon: require("./Dragon"),
  Elephant: require("./Elephant"),
  Ogre: require("./Ogre"),
  Plant: require("./Plant"),
  SoldierAlly: require("./SoldierAlly")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setTWWK = module.exports;}
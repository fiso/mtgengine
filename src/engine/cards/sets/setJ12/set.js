"use strict";
module.exports = {
  Centaur: require("./Centaur"),
  CommandTower: require("./CommandTower"),
  Flusterstorm: require("./Flusterstorm"),
  Karakas: require("./Karakas"),
  KarmicGuide: require("./KarmicGuide"),
  NobleHierarch: require("./NobleHierarch"),
  SneakAttack: require("./SneakAttack"),
  SwordofLightandShadow: require("./SwordofLightandShadow"),
  XiahouDuntheOneEyed: require("./XiahouDuntheOneEyed")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setJ12 = module.exports;}
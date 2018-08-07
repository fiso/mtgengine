"use strict";
module.exports = {
  CurseofWizardry: require("./CurseofWizardry"),
  Fling: require("./Fling"),
  GolemsHeart: require("./GolemsHeart"),
  KorFirewalker: require("./KorFirewalker"),
  LeatherbackBaloth: require("./LeatherbackBaloth"),
  PathrazerofUlamog: require("./PathrazerofUlamog"),
  PlagueStinger: require("./PlagueStinger"),
  Skinrender: require("./Skinrender"),
  SylvanRanger: require("./SylvanRanger"),
  SyphonMind: require("./SyphonMind")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setPWP10 = module.exports;}
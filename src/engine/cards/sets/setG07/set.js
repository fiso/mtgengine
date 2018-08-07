"use strict";
module.exports = {
  CunningWish: require("./CunningWish"),
  DecreeofJustice: require("./DecreeofJustice"),
  RavenousBaloth: require("./RavenousBaloth"),
  Vindicate: require("./Vindicate"),
  YawgmothsWill: require("./YawgmothsWill")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setG07 = module.exports;}
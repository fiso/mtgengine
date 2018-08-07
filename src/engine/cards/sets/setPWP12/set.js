"use strict";
module.exports = {
  CurseofThirst: require("./CurseofThirst"),
  GathertheTownsfolk: require("./GathertheTownsfolk"),
  NearheathStalker: require("./NearheathStalker")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setPWP12 = module.exports;}
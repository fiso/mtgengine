"use strict";
module.exports = {
  AzusaLostbutSeeking: require("./AzusaLostbutSeeking"),
  CommandBeacon: require("./CommandBeacon"),
  DefenseoftheHeart: require("./DefenseoftheHeart"),
  ImperialSeal: require("./ImperialSeal"),
  ManaDrain: require("./ManaDrain"),
  MysticConfluence: require("./MysticConfluence"),
  ZurtheEnchanter: require("./ZurtheEnchanter")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setJ16 = module.exports;}
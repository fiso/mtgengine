"use strict";
module.exports = {
  HammerofBogardan: require("./HammerofBogardan"),
  TradewindRider: require("./TradewindRider")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setG02 = module.exports;}
"use strict";
module.exports = {
  SproutingThrinax: require("./SproutingThrinax"),
  WoollyThoctar: require("./WoollyThoctar")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setPWPN = module.exports;}
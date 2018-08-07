"use strict";
module.exports = {
  SoulofRavnica: require("./SoulofRavnica"),
  SoulofZendikar: require("./SoulofZendikar")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setPDP14 = module.exports;}
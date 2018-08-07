"use strict";
module.exports = {
  DeathlessAngel: require("./DeathlessAngel"),
  EmrakultheAeonsTorn: require("./EmrakultheAeonsTorn"),
  GuulDrazAssassin: require("./GuulDrazAssassin"),
  LordofShatterskullPass: require("./LordofShatterskullPass"),
  Staggershock: require("./Staggershock")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setPROE = module.exports;}
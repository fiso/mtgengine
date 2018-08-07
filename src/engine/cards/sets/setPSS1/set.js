"use strict";
module.exports = {
  CanopyVista: require("./CanopyVista"),
  CinderGlade: require("./CinderGlade"),
  PrairieStream: require("./PrairieStream"),
  SmolderingMarsh: require("./SmolderingMarsh"),
  SunkenHollow: require("./SunkenHollow")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setPSS1 = module.exports;}
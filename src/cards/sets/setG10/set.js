"use strict";
module.exports = {
  LandTax: require("./LandTax"),
  Morphling: require("./Morphling"),
  NaturalOrder: require("./NaturalOrder"),
  PhyrexianDreadnought: require("./PhyrexianDreadnought"),
  Sinkhole: require("./Sinkhole"),
  ThawingGlaciers: require("./ThawingGlaciers"),
  Wasteland: require("./Wasteland"),
  WheelofFortune: require("./WheelofFortune")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setG10 = module.exports;}
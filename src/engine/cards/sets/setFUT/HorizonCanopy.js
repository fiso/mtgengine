"use strict";
const Constants = require ("../../../Constants");
const HorizonCanopyBase = require("../setIMA/HorizonCanopy");

class HorizonCanopy extends HorizonCanopyBase {
  constructor (game) {
    super(game, "Horizon Canopy", "Future Sight", "FUT");
  }
}

module.exports = HorizonCanopy;

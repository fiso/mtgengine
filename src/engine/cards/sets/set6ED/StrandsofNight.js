"use strict";
const Constants = require ("../../../Constants");
const StrandsofNightBase = require("../set7ED/StrandsofNight");

class StrandsofNight extends StrandsofNightBase {
  constructor (game) {
    super(game, "Strands of Night", "Classic Sixth Edition", "6ED");
  }
}

module.exports = StrandsofNight;

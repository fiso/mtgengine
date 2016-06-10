"use strict";
const Constants = require ("../../../Constants");
const TitanicGrowthBase = require("../setM12/TitanicGrowth");

class TitanicGrowth extends TitanicGrowthBase {
  constructor (game) {
    super(game, "Titanic Growth", "Magic 2013", "M13");
  }
}

module.exports = TitanicGrowth;

"use strict";
const Constants = require ("../../../Constants");
const TitanicGrowthBase = require("../setM19/TitanicGrowth");

class TitanicGrowth extends TitanicGrowthBase {
  constructor (game) {
    super(game, "Titanic Growth", "Magic 2012", "M12");
  }
}

module.exports = TitanicGrowth;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TitanicGrowthBase = require("../setM12/TitanicGrowth.js");

class TitanicGrowth extends TitanicGrowthBase {
  constructor(game) {
    super(game, "Titanic Growth", "Magic 2015 Core Set", "M15");
  }
}

module.exports = TitanicGrowth;

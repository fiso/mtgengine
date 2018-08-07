"use strict";
const Constants = require ("../../../Constants");
const HorizonScholarBase = require("../setM19/HorizonScholar");

class HorizonScholar extends HorizonScholarBase {
  constructor (game) {
    super(game, "Horizon Scholar", "Theros", "THS");
  }
}

module.exports = HorizonScholar;

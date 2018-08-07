"use strict";
const Constants = require ("../../../Constants");
const MazirekKraulDeathPriestBase = require("../setCMA/MazirekKraulDeathPriest");

class MazirekKraulDeathPriest extends MazirekKraulDeathPriestBase {
  constructor (game) {
    super(game, "Mazirek, Kraul Death Priest", "Commander 2015", "C15");
  }
}

module.exports = MazirekKraulDeathPriest;

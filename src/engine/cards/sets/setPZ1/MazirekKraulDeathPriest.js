"use strict";
const Constants = require ("../../../Constants");
const MazirekKraulDeathPriestBase = require("../setCMA/MazirekKraulDeathPriest");

class MazirekKraulDeathPriest extends MazirekKraulDeathPriestBase {
  constructor (game) {
    super(game, "Mazirek, Kraul Death Priest", "Legendary Cube", "PZ1");
  }
}

module.exports = MazirekKraulDeathPriest;

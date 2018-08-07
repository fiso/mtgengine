"use strict";
const Constants = require ("../../../Constants");
const BeastcallerSavantBase = require("../setBFZ/BeastcallerSavant");

class BeastcallerSavant extends BeastcallerSavantBase {
  constructor (game) {
    super(game, "Beastcaller Savant", "Battle for Zendikar Promos", "PBFZ");
  }
}

module.exports = BeastcallerSavant;

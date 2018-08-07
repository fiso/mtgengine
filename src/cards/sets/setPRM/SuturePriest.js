"use strict";
const Constants = require ("../../../Constants");
const SuturePriestBase = require("../setNPH/SuturePriest");

class SuturePriest extends SuturePriestBase {
  constructor (game) {
    super(game, "Suture Priest", "Magic Online Promos", "PRM");
  }
}

module.exports = SuturePriest;

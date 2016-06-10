"use strict";
const Constants = require ("../../../Constants");
const PlaguedRusalkaBase = require("../setDDJ/PlaguedRusalka");

class PlaguedRusalka extends PlaguedRusalkaBase {
  constructor (game) {
    super(game, "Plagued Rusalka", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = PlaguedRusalka;

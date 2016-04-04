"use strict";
const Constants = require ("../../../Constants");
const PlaguedRusalkaBase = require("../setDDJ/PlaguedRusalka");

class PlaguedRusalka extends PlaguedRusalkaBase {
  constructor(game) {
    super(game, "Plagued Rusalka", "Guildpact", "GPT");
  }
}

module.exports = PlaguedRusalka;

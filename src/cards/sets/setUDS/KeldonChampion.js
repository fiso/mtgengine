"use strict";
const Constants = require ("../../../Constants");
const KeldonChampionBase = require("../setHOP/KeldonChampion");

class KeldonChampion extends KeldonChampionBase {
  constructor(game) {
    super(game, "Keldon Champion", "Urza's Destiny", "UDS");
  }
}

module.exports = KeldonChampion;

"use strict";
const Constants = require ("../../../Constants");
const KeldonChampionBase = require("../setHOP/KeldonChampion");

class KeldonChampion extends KeldonChampionBase {
  constructor (game) {
    super(game, "Keldon Champion", "Premium Deck Series: Fire and Lightning", "PD2");
  }
}

module.exports = KeldonChampion;

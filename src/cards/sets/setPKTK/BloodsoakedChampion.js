"use strict";
const Constants = require ("../../../Constants");
const BloodsoakedChampionBase = require("../setKTK/BloodsoakedChampion");

class BloodsoakedChampion extends BloodsoakedChampionBase {
  constructor (game) {
    super(game, "Bloodsoaked Champion", "Khans of Tarkir Promos", "PKTK");
  }
}

module.exports = BloodsoakedChampion;

"use strict";
const Constants = require ("../../../Constants");
const BloodsoakedChampionBase = require("../setKTK/BloodsoakedChampion");

class BloodsoakedChampion extends BloodsoakedChampionBase {
  constructor(game) {
    super(game, "Bloodsoaked Champion", "Prerelease Events", "pPRE");
  }
}

module.exports = BloodsoakedChampion;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BloodsoakedChampionBase = require("../setKTK/BloodsoakedChampion.js");

class BloodsoakedChampion extends BloodsoakedChampionBase {
  constructor(game) {
    super(game, "Bloodsoaked Champion", "Prerelease Events", "pPRE");
  }
}

module.exports = BloodsoakedChampion;

"use strict";
const Constants = require ("../../../Constants");
const SoltariChampionBase = require("../setSTH/SoltariChampion");

class SoltariChampion extends SoltariChampionBase {
  constructor (game) {
    super(game, "Soltari Champion", "Tempest Remastered", "TPR");
  }
}

module.exports = SoltariChampion;

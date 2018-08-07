"use strict";
const Constants = require ("../../../Constants");
const ElvishChampionBase = require("../setDPA/ElvishChampion");

class ElvishChampion extends ElvishChampionBase {
  constructor (game) {
    super(game, "Elvish Champion", "Junior APAC Series", "PJAS");
  }
}

module.exports = ElvishChampion;

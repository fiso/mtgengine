"use strict";
const Constants = require ("../../../Constants");
const FoundryChampionBase = require("../setGTC/FoundryChampion");

class FoundryChampion extends FoundryChampionBase {
  constructor (game) {
    super(game, "Foundry Champion", "Prerelease Events", "pPRE");
  }
}

module.exports = FoundryChampion;

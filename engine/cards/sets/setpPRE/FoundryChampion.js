"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FoundryChampionBase = require("../setGTC/FoundryChampion.js");

class FoundryChampion extends FoundryChampionBase {
  constructor(game) {
    super(game, "Foundry Champion", "Prerelease Events", "pPRE");
  }
}

module.exports = FoundryChampion;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StoicChampionBase = require("../setLGN/StoicChampion.js");

class StoicChampion extends StoicChampionBase {
  constructor(game) {
    super(game, "Stoic Champion", "Vintage Masters", "VMA");
  }
}

module.exports = StoicChampion;

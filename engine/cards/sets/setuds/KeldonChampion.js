"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KeldonChampionBase = require("../setHOP/KeldonChampion.js");

class KeldonChampion extends KeldonChampionBase {
  constructor(game) {
    super(game, "Keldon Champion", "Urza's Destiny", "UDS");
  }
}

module.exports = KeldonChampion;

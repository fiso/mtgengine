"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SalvageTitan extends Card {
  constructor(game) {
    super(game, "Salvage Titan", "Shards of Alara", "ALA");
  }
}

module.exports = SalvageTitan;

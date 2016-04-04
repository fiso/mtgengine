"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SavageHunger extends Card {
  constructor(game) {
    super(game, "Savage Hunger", "Shards of Alara", "ALA");
  }
}

module.exports = SavageHunger;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PossessedBarbarian extends Card {
  constructor(game) {
    super(game, "Possessed Barbarian", "Torment", "TOR");
  }
}

module.exports = PossessedBarbarian;

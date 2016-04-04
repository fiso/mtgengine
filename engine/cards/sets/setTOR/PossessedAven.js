"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PossessedAven extends Card {
  constructor(game) {
    super(game, "Possessed Aven", "Torment", "TOR");
  }
}

module.exports = PossessedAven;

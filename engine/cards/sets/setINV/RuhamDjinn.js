"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RuhamDjinn extends Card {
  constructor(game) {
    super(game, "Ruham Djinn", "Invasion", "INV");
  }
}

module.exports = RuhamDjinn;

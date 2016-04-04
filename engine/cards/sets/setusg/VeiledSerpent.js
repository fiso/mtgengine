"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VeiledSerpent extends Card {
  constructor(game) {
    super(game, "Veiled Serpent", "Urza's Saga", "USG");
  }
}

module.exports = VeiledSerpent;

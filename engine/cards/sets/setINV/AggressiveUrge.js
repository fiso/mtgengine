"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AggressiveUrge extends Card {
  constructor(game) {
    super(game, "Aggressive Urge", "Invasion", "INV");
  }
}

module.exports = AggressiveUrge;

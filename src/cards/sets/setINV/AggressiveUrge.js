"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AggressiveUrge extends UnimplementedCard {
  constructor(game) {
    super(game, "Aggressive Urge", "Invasion", "INV");
  }
}

module.exports = AggressiveUrge;

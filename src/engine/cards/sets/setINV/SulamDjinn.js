"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SulamDjinn extends UnimplementedCard {
  constructor (game) {
    super(game, "Sulam Djinn", "Invasion", "INV");
  }
}

module.exports = SulamDjinn;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PincherBeetles extends UnimplementedCard {
  constructor (game) {
    super(game, "Pincher Beetles", "Battle Royale Box Set", "BRB");
  }
}

module.exports = PincherBeetles;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CoalitionVictory extends UnimplementedCard {
  constructor (game) {
    super(game, "Coalition Victory", "Invasion", "INV");
  }
}

module.exports = CoalitionVictory;

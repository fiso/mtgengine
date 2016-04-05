"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeathBomb extends UnimplementedCard {
  constructor(game) {
    super(game, "Death Bomb", "Planeshift", "PLS");
  }
}

module.exports = DeathBomb;

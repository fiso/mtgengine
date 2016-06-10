"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpawningBreath extends UnimplementedCard {
  constructor (game) {
    super(game, "Spawning Breath", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = SpawningBreath;

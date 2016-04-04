"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpawningBreath extends Card {
  constructor(game) {
    super(game, "Spawning Breath", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = SpawningBreath;

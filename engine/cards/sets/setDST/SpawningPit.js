"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpawningPit extends Card {
  constructor(game) {
    super(game, "Spawning Pit", "Darksteel", "DST");
  }
}

module.exports = SpawningPit;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpawningBed extends Card {
  constructor(game) {
    super(game, "Spawning Bed", "Battle for Zendikar", "BFZ");
  }
}

module.exports = SpawningBed;

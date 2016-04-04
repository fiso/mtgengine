"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpawningBed extends UnimplementedCard {
  constructor(game) {
    super(game, "Spawning Bed", "Battle for Zendikar", "BFZ");
  }
}

module.exports = SpawningBed;

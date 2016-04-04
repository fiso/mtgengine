"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpawningPit extends UnimplementedCard {
  constructor(game) {
    super(game, "Spawning Pit", "Darksteel", "DST");
  }
}

module.exports = SpawningPit;

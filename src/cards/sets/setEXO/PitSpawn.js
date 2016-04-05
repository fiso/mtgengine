"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PitSpawn extends UnimplementedCard {
  constructor(game) {
    super(game, "Pit Spawn", "Exodus", "EXO");
  }
}

module.exports = PitSpawn;

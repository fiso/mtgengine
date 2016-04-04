"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PitSpawn extends Card {
  constructor(game) {
    super(game, "Pit Spawn", "Exodus", "EXO");
  }
}

module.exports = PitSpawn;

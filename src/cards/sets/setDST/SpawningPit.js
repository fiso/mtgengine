"use strict";
const Constants = require ("../../../Constants");
const SpawningPitBase = require("../setTD2/SpawningPit");

class SpawningPit extends SpawningPitBase {
  constructor (game) {
    super(game, "Spawning Pit", "Darksteel", "DST");
  }
}

module.exports = SpawningPit;

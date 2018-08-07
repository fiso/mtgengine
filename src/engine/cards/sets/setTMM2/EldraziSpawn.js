"use strict";
const Constants = require ("../../../Constants");
const EldraziSpawnBase = require("../setTC17/EldraziSpawn");

class EldraziSpawn extends EldraziSpawnBase {
  constructor (game) {
    super(game, "Eldrazi Spawn", "Modern Masters 2015 Tokens", "TMM2");
  }
}

module.exports = EldraziSpawn;

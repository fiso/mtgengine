"use strict";
const Constants = require ("../../../Constants");
const EldraziSpawnBase = require("../setTC17/EldraziSpawn");

class EldraziSpawn extends EldraziSpawnBase {
  constructor (game) {
    super(game, "Eldrazi Spawn", "Planechase Anthology Tokens", "TPCA");
  }
}

module.exports = EldraziSpawn;

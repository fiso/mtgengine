"use strict";
const Constants = require ("../../../Constants");
const DeepSpawnBase = require("../setME2/DeepSpawn");

class DeepSpawn extends DeepSpawnBase {
  constructor (game) {
    super(game, "Deep Spawn", "Fallen Empires", "FEM");
  }
}

module.exports = DeepSpawn;

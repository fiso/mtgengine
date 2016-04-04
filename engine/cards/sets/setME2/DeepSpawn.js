"use strict";
const Constants = require ("../../../Constants");
const DeepSpawnBase = require("../setFEM/DeepSpawn");

class DeepSpawn extends DeepSpawnBase {
  constructor(game) {
    super(game, "Deep Spawn", "Masters Edition II", "ME2");
  }
}

module.exports = DeepSpawn;

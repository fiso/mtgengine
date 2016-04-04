"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DeepSpawnBase = require("../setFEM/DeepSpawn.js");

class DeepSpawn extends DeepSpawnBase {
  constructor(game) {
    super(game, "Deep Spawn", "Masters Edition II", "ME2");
  }
}

module.exports = DeepSpawn;

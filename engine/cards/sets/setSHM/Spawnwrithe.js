"use strict";
const Constants = require ("../../../Constants");
const SpawnwritheBase = require("../setDDM/Spawnwrithe");

class Spawnwrithe extends SpawnwritheBase {
  constructor(game) {
    super(game, "Spawnwrithe", "Shadowmoor", "SHM");
  }
}

module.exports = Spawnwrithe;

"use strict";
const Constants = require ("../../../Constants");
const SpawnwritheBase = require("../setDDM/Spawnwrithe");

class Spawnwrithe extends SpawnwritheBase {
  constructor (game) {
    super(game, "Spawnwrithe", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = Spawnwrithe;

"use strict";
const Constants = require ("../../../Constants");
const SpawnwritheBase = require("../setDDM/Spawnwrithe");

class Spawnwrithe extends SpawnwritheBase {
  constructor (game) {
    super(game, "Spawnwrithe", "Commander 2011", "CMD");
  }
}

module.exports = Spawnwrithe;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SpawnwritheBase = require("../setDDM/Spawnwrithe.js");

class Spawnwrithe extends SpawnwritheBase {
  constructor(game) {
    super(game, "Spawnwrithe", "Shadowmoor", "SHM");
  }
}

module.exports = Spawnwrithe;

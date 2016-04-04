"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SpawnwritheBase = require("../setDDM/Spawnwrithe.js");

class Spawnwrithe extends SpawnwritheBase {
  constructor(game) {
    super(game, "Spawnwrithe", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = Spawnwrithe;

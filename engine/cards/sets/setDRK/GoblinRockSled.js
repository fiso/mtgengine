"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoblinRockSledBase = require("../set4ED/GoblinRockSled.js");

class GoblinRockSled extends GoblinRockSledBase {
  constructor(game) {
    super(game, "Goblin Rock Sled", "The Dark", "DRK");
  }
}

module.exports = GoblinRockSled;

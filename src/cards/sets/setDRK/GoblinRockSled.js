"use strict";
const Constants = require ("../../../Constants");
const GoblinRockSledBase = require("../set4ED/GoblinRockSled");

class GoblinRockSled extends GoblinRockSledBase {
  constructor (game) {
    super(game, "Goblin Rock Sled", "The Dark", "DRK");
  }
}

module.exports = GoblinRockSled;

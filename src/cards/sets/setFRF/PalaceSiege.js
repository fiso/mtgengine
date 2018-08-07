"use strict";
const Constants = require ("../../../Constants");
const PalaceSiegeBase = require("../setC17/PalaceSiege");

class PalaceSiege extends PalaceSiegeBase {
  constructor (game) {
    super(game, "Palace Siege", "Fate Reforged", "FRF");
  }
}

module.exports = PalaceSiege;

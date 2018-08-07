"use strict";
const Constants = require ("../../../Constants");
const RuricThartheUnbowedBase = require("../setA25/RuricThartheUnbowed");

class RuricThartheUnbowed extends RuricThartheUnbowedBase {
  constructor (game) {
    super(game, "Ruric Thar, the Unbowed", "Dragon's Maze", "DGM");
  }
}

module.exports = RuricThartheUnbowed;

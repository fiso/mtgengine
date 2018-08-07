"use strict";
const Constants = require ("../../../Constants");
const SpikeJesterBase = require("../setMM3/SpikeJester");

class SpikeJester extends SpikeJesterBase {
  constructor (game) {
    super(game, "Spike Jester", "Dragon's Maze", "DGM");
  }
}

module.exports = SpikeJester;

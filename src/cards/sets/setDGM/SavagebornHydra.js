"use strict";
const Constants = require ("../../../Constants");
const SavagebornHydraBase = require("../setIMA/SavagebornHydra");

class SavagebornHydra extends SavagebornHydraBase {
  constructor (game) {
    super(game, "Savageborn Hydra", "Dragon's Maze", "DGM");
  }
}

module.exports = SavagebornHydra;

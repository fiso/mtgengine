"use strict";
const Constants = require ("../../../Constants");
const NivixCyclopsBase = require("../setDDS/NivixCyclops");

class NivixCyclops extends NivixCyclopsBase {
  constructor (game) {
    super(game, "Nivix Cyclops", "Dragon's Maze", "DGM");
  }
}

module.exports = NivixCyclops;

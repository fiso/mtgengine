"use strict";
const Constants = require ("../../../Constants");
const GazeofGraniteBase = require("../setC18/GazeofGranite");

class GazeofGranite extends GazeofGraniteBase {
  constructor (game) {
    super(game, "Gaze of Granite", "Dragon's Maze", "DGM");
  }
}

module.exports = GazeofGranite;

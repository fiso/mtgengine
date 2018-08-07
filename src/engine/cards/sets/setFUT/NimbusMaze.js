"use strict";
const Constants = require ("../../../Constants");
const NimbusMazeBase = require("../setIMA/NimbusMaze");

class NimbusMaze extends NimbusMazeBase {
  constructor (game) {
    super(game, "Nimbus Maze", "Future Sight", "FUT");
  }
}

module.exports = NimbusMaze;

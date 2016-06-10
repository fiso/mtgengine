"use strict";
const Constants = require ("../../../Constants");
const GazeofGraniteBase = require("../setDGM/GazeofGranite");

class GazeofGranite extends GazeofGraniteBase {
  constructor (game) {
    super(game, "Gaze of Granite", "Media Inserts", "pMEI");
  }
}

module.exports = GazeofGranite;

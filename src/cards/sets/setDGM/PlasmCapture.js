"use strict";
const Constants = require ("../../../Constants");
const PlasmCaptureBase = require("../setDDO/PlasmCapture");

class PlasmCapture extends PlasmCaptureBase {
  constructor (game) {
    super(game, "Plasm Capture", "Dragon's Maze", "DGM");
  }
}

module.exports = PlasmCapture;

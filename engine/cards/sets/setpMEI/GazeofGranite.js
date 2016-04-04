"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GazeofGraniteBase = require("../setDGM/GazeofGranite.js");

class GazeofGranite extends GazeofGraniteBase {
  constructor(game) {
    super(game, "Gaze of Granite", "Media Inserts", "pMEI");
  }
}

module.exports = GazeofGranite;

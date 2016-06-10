"use strict";
const Constants = require ("../../../Constants");
const DeflectingPalmBase = require("../setKTK/DeflectingPalm");

class DeflectingPalm extends DeflectingPalmBase {
  constructor (game) {
    super(game, "Deflecting Palm", "Prerelease Events", "pPRE");
  }
}

module.exports = DeflectingPalm;

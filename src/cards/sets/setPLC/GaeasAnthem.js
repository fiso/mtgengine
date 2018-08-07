"use strict";
const Constants = require ("../../../Constants");
const GaeasAnthemBase = require("../setMM3/GaeasAnthem");

class GaeasAnthem extends GaeasAnthemBase {
  constructor (game) {
    super(game, "Gaea's Anthem", "Planar Chaos", "PLC");
  }
}

module.exports = GaeasAnthem;

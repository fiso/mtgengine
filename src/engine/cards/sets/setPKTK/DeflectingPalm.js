"use strict";
const Constants = require ("../../../Constants");
const DeflectingPalmBase = require("../setKTK/DeflectingPalm");

class DeflectingPalm extends DeflectingPalmBase {
  constructor (game) {
    super(game, "Deflecting Palm", "Khans of Tarkir Promos", "PKTK");
  }
}

module.exports = DeflectingPalm;

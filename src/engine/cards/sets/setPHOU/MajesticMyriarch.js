"use strict";
const Constants = require ("../../../Constants");
const MajesticMyriarchBase = require("../setHOU/MajesticMyriarch");

class MajesticMyriarch extends MajesticMyriarchBase {
  constructor (game) {
    super(game, "Majestic Myriarch", "Hour of Devastation Promos", "PHOU");
  }
}

module.exports = MajesticMyriarch;

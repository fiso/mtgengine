"use strict";
const Constants = require ("../../../Constants");
const BronzebeakMoaBase = require("../setMM3/BronzebeakMoa");

class BronzebeakMoa extends BronzebeakMoaBase {
  constructor (game) {
    super(game, "Bronzebeak Moa", "Dragon's Maze", "DGM");
  }
}

module.exports = BronzebeakMoa;

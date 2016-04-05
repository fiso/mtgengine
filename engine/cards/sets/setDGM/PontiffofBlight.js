"use strict";
const Constants = require ("../../../Constants");
const PontiffofBlightBase = require("../setC14/PontiffofBlight");

class PontiffofBlight extends PontiffofBlightBase {
  constructor(game) {
    super(game, "Pontiff of Blight", "Dragon's Maze", "DGM");
  }
}

module.exports = PontiffofBlight;

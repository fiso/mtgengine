"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PontiffofBlightBase = require("../setC14/PontiffofBlight.js");

class PontiffofBlight extends PontiffofBlightBase {
  constructor(game) {
    super(game, "Pontiff of Blight", "Dragon's Maze", "DGM");
  }
}

module.exports = PontiffofBlight;

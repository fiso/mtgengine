"use strict";
const Constants = require ("../../../Constants");
const PyrewildShamanBase = require("../setMM3/PyrewildShaman");

class PyrewildShaman extends PyrewildShamanBase {
  constructor (game) {
    super(game, "Pyrewild Shaman", "Dragon's Maze", "DGM");
  }
}

module.exports = PyrewildShaman;

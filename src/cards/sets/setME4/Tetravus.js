"use strict";
const Constants = require ("../../../Constants");
const TetravusBase = require("../setATQ/Tetravus");

class Tetravus extends TetravusBase {
  constructor (game) {
    super(game, "Tetravus", "Masters Edition IV", "ME4");
  }
}

module.exports = Tetravus;

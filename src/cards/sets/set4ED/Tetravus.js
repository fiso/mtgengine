"use strict";
const Constants = require ("../../../Constants");
const TetravusBase = require("../setATQ/Tetravus");

class Tetravus extends TetravusBase {
  constructor (game) {
    super(game, "Tetravus", "Fourth Edition", "4ED");
  }
}

module.exports = Tetravus;

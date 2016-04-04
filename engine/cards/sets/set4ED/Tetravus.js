"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TetravusBase = require("../setATQ/Tetravus.js");

class Tetravus extends TetravusBase {
  constructor(game) {
    super(game, "Tetravus", "Fourth Edition", "4ED");
  }
}

module.exports = Tetravus;

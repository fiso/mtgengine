"use strict";
const Constants = require ("../../../Constants");
const TazeemBase = require("../setPCA/Tazeem");

class Tazeem extends TazeemBase {
  constructor (game) {
    super(game, "Tazeem", "Magic Online Promos", "PRM");
  }
}

module.exports = Tazeem;

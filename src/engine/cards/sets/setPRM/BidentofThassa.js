"use strict";
const Constants = require ("../../../Constants");
const BidentofThassaBase = require("../setA25/BidentofThassa");

class BidentofThassa extends BidentofThassaBase {
  constructor (game) {
    super(game, "Bident of Thassa", "Magic Online Promos", "PRM");
  }
}

module.exports = BidentofThassa;

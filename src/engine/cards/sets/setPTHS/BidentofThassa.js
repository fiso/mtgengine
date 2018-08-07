"use strict";
const Constants = require ("../../../Constants");
const BidentofThassaBase = require("../setA25/BidentofThassa");

class BidentofThassa extends BidentofThassaBase {
  constructor (game) {
    super(game, "Bident of Thassa", "Theros Promos", "PTHS");
  }
}

module.exports = BidentofThassa;

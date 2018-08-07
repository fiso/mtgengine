"use strict";
const Constants = require ("../../../Constants");
const DisfigureBase = require("../setA25/Disfigure");

class Disfigure extends DisfigureBase {
  constructor (game) {
    super(game, "Disfigure", "Duel Decks: Nissa vs. Ob Nixilis", "DDR");
  }
}

module.exports = Disfigure;

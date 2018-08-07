"use strict";
const Constants = require ("../../../Constants");
const GuileBase = require("../setMM2/Guile");

class Guile extends GuileBase {
  constructor (game) {
    super(game, "Guile", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = Guile;

"use strict";
const Constants = require ("../../../Constants");
const BodyDoubleBase = require("../setC17/BodyDouble");

class BodyDouble extends BodyDoubleBase {
  constructor (game) {
    super(game, "Body Double", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = BodyDouble;

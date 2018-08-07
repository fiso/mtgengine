"use strict";
const Constants = require ("../../../Constants");
const PhantasmalBearBase = require("../setA25/PhantasmalBear");

class PhantasmalBear extends PhantasmalBearBase {
  constructor (game) {
    super(game, "Phantasmal Bear", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = PhantasmalBear;

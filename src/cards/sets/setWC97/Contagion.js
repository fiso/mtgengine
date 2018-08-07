"use strict";
const Constants = require ("../../../Constants");
const ContagionBase = require("../setMED/Contagion");

class Contagion extends ContagionBase {
  constructor (game) {
    super(game, "Contagion", "World Championship Decks 1997", "WC97");
  }
}

module.exports = Contagion;

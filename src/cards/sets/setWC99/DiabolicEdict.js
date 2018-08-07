"use strict";
const Constants = require ("../../../Constants");
const DiabolicEdictBase = require("../setA25/DiabolicEdict");

class DiabolicEdict extends DiabolicEdictBase {
  constructor (game) {
    super(game, "Diabolic Edict", "World Championship Decks 1999", "WC99");
  }
}

module.exports = DiabolicEdict;

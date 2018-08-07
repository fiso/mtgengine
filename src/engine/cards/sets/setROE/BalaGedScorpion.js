"use strict";
const Constants = require ("../../../Constants");
const BalaGedScorpionBase = require("../setIMA/BalaGedScorpion");

class BalaGedScorpion extends BalaGedScorpionBase {
  constructor (game) {
    super(game, "Bala Ged Scorpion", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = BalaGedScorpion;

"use strict";
const Constants = require ("../../../Constants");
const MortifyBase = require("../setC18/Mortify");

class Mortify extends MortifyBase {
  constructor (game) {
    super(game, "Mortify", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = Mortify;

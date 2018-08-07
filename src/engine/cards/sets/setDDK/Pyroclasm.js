"use strict";
const Constants = require ("../../../Constants");
const PyroclasmBase = require("../setA25/Pyroclasm");

class Pyroclasm extends PyroclasmBase {
  constructor (game) {
    super(game, "Pyroclasm", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = Pyroclasm;

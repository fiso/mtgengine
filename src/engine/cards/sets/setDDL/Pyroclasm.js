"use strict";
const Constants = require ("../../../Constants");
const PyroclasmBase = require("../setA25/Pyroclasm");

class Pyroclasm extends PyroclasmBase {
  constructor (game) {
    super(game, "Pyroclasm", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = Pyroclasm;

"use strict";
const Constants = require ("../../../Constants");
const PyroclasmBase = require("../setA25/Pyroclasm");

class Pyroclasm extends PyroclasmBase {
  constructor (game) {
    super(game, "Pyroclasm", "World Championship Decks 2001", "WC01");
  }
}

module.exports = Pyroclasm;

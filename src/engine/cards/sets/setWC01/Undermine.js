"use strict";
const Constants = require ("../../../Constants");
const UndermineBase = require("../setDDH/Undermine");

class Undermine extends UndermineBase {
  constructor (game) {
    super(game, "Undermine", "World Championship Decks 2001", "WC01");
  }
}

module.exports = Undermine;

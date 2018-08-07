"use strict";
const Constants = require ("../../../Constants");
const OppositionBase = require("../setMP2/Opposition");

class Opposition extends OppositionBase {
  constructor (game) {
    super(game, "Opposition", "World Championship Decks 2001", "WC01");
  }
}

module.exports = Opposition;

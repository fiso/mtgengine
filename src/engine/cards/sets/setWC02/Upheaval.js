"use strict";
const Constants = require ("../../../Constants");
const UpheavalBase = require("../setV14/Upheaval");

class Upheaval extends UpheavalBase {
  constructor (game) {
    super(game, "Upheaval", "World Championship Decks 2002", "WC02");
  }
}

module.exports = Upheaval;

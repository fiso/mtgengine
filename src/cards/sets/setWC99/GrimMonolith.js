"use strict";
const Constants = require ("../../../Constants");
const GrimMonolithBase = require("../setPRM/GrimMonolith");

class GrimMonolith extends GrimMonolithBase {
  constructor (game) {
    super(game, "Grim Monolith", "World Championship Decks 1999", "WC99");
  }
}

module.exports = GrimMonolith;

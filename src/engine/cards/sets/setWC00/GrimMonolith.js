"use strict";
const Constants = require ("../../../Constants");
const GrimMonolithBase = require("../setPRM/GrimMonolith");

class GrimMonolith extends GrimMonolithBase {
  constructor (game) {
    super(game, "Grim Monolith", "World Championship Decks 2000", "WC00");
  }
}

module.exports = GrimMonolith;

"use strict";
const Constants = require ("../../../Constants");
const WerebearBase = require("../setEMA/Werebear");

class Werebear extends WerebearBase {
  constructor (game) {
    super(game, "Werebear", "World Championship Decks 2002", "WC02");
  }
}

module.exports = Werebear;

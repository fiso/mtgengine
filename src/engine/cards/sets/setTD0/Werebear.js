"use strict";
const Constants = require ("../../../Constants");
const WerebearBase = require("../setEMA/Werebear");

class Werebear extends WerebearBase {
  constructor (game) {
    super(game, "Werebear", "Magic Online Theme Decks", "TD0");
  }
}

module.exports = Werebear;

"use strict";
const Constants = require ("../../../Constants");
const BrushlandBase = require("../set10E/Brushland");

class Brushland extends BrushlandBase {
  constructor (game) {
    super(game, "Brushland", "World Championship Decks 2002", "WC02");
  }
}

module.exports = Brushland;

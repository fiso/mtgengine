"use strict";
const Constants = require ("../../../Constants");
const FloodPlainBase = require("../setVMA/FloodPlain");

class FloodPlain extends FloodPlainBase {
  constructor (game) {
    super(game, "Flood Plain", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = FloodPlain;

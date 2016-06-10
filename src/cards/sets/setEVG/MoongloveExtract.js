"use strict";
const Constants = require ("../../../Constants");
const MoongloveExtractBase = require("../setDD3_EVG/MoongloveExtract");

class MoongloveExtract extends MoongloveExtractBase {
  constructor (game) {
    super(game, "Moonglove Extract", "Duel Decks: Elves vs. Goblins", "EVG");
  }
}

module.exports = MoongloveExtract;

"use strict";
const Constants = require ("../../../Constants");
const MoongloveExtractBase = require("../setIMA/MoongloveExtract");

class MoongloveExtract extends MoongloveExtractBase {
  constructor (game) {
    super(game, "Moonglove Extract", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = MoongloveExtract;

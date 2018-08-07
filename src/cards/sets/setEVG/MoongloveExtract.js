"use strict";
const Constants = require ("../../../Constants");
const MoongloveExtractBase = require("../setIMA/MoongloveExtract");

class MoongloveExtract extends MoongloveExtractBase {
  constructor (game) {
    super(game, "Moonglove Extract", "Duel Decks Anthology: Elves vs. Goblins", "EVG");
  }
}

module.exports = MoongloveExtract;

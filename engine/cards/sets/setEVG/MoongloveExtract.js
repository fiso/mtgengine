"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MoongloveExtractBase = require("../setDD3_EVG/MoongloveExtract.js");

class MoongloveExtract extends MoongloveExtractBase {
  constructor(game) {
    super(game, "Moonglove Extract", "Duel Decks: Elves vs. Goblins", "EVG");
  }
}

module.exports = MoongloveExtract;

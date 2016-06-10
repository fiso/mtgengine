"use strict";
const Constants = require ("../../../Constants");
const GempalmStriderBase = require("../setDD3_EVG/GempalmStrider");

class GempalmStrider extends GempalmStriderBase {
  constructor (game) {
    super(game, "Gempalm Strider", "Duel Decks: Elves vs. Goblins", "EVG");
  }
}

module.exports = GempalmStrider;

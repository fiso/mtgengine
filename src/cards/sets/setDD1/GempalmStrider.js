"use strict";
const Constants = require ("../../../Constants");
const GempalmStriderBase = require("../setEVG/GempalmStrider");

class GempalmStrider extends GempalmStriderBase {
  constructor (game) {
    super(game, "Gempalm Strider", "Duel Decks: Elves vs. Goblins", "DD1");
  }
}

module.exports = GempalmStrider;

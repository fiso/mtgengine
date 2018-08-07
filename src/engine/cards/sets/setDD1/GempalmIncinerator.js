"use strict";
const Constants = require ("../../../Constants");
const GempalmIncineratorBase = require("../setDDT/GempalmIncinerator");

class GempalmIncinerator extends GempalmIncineratorBase {
  constructor (game) {
    super(game, "Gempalm Incinerator", "Duel Decks: Elves vs. Goblins", "DD1");
  }
}

module.exports = GempalmIncinerator;

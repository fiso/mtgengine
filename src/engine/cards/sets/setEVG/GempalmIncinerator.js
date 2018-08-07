"use strict";
const Constants = require ("../../../Constants");
const GempalmIncineratorBase = require("../setDDT/GempalmIncinerator");

class GempalmIncinerator extends GempalmIncineratorBase {
  constructor (game) {
    super(game, "Gempalm Incinerator", "Duel Decks Anthology: Elves vs. Goblins", "EVG");
  }
}

module.exports = GempalmIncinerator;

"use strict";
const Constants = require ("../../../Constants");
const ElvishHarbingerBase = require("../setDD3_EVG/ElvishHarbinger");

class ElvishHarbinger extends ElvishHarbingerBase {
  constructor (game) {
    super(game, "Elvish Harbinger", "Duel Decks: Elves vs. Goblins", "EVG");
  }
}

module.exports = ElvishHarbinger;

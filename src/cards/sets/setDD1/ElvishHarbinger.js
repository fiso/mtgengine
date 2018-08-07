"use strict";
const Constants = require ("../../../Constants");
const ElvishHarbingerBase = require("../setEVG/ElvishHarbinger");

class ElvishHarbinger extends ElvishHarbingerBase {
  constructor (game) {
    super(game, "Elvish Harbinger", "Duel Decks: Elves vs. Goblins", "DD1");
  }
}

module.exports = ElvishHarbinger;

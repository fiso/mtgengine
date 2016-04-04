"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ElvishHarbingerBase = require("../setDD3_EVG/ElvishHarbinger.js");

class ElvishHarbinger extends ElvishHarbingerBase {
  constructor(game) {
    super(game, "Elvish Harbinger", "Duel Decks: Elves vs. Goblins", "EVG");
  }
}

module.exports = ElvishHarbinger;

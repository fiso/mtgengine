"use strict";
const Constants = require ("../../../Constants");
const WirewoodLodgeBase = require("../setDD3_EVG/WirewoodLodge");

class WirewoodLodge extends WirewoodLodgeBase {
  constructor(game) {
    super(game, "Wirewood Lodge", "Duel Decks: Elves vs. Goblins", "EVG");
  }
}

module.exports = WirewoodLodge;

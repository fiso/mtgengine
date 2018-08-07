"use strict";
const Constants = require ("../../../Constants");
const WirewoodLodgeBase = require("../setEVG/WirewoodLodge");

class WirewoodLodge extends WirewoodLodgeBase {
  constructor (game) {
    super(game, "Wirewood Lodge", "Duel Decks: Elves vs. Goblins", "DD1");
  }
}

module.exports = WirewoodLodge;

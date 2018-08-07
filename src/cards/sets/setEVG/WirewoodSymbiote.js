"use strict";
const Constants = require ("../../../Constants");
const WirewoodSymbioteBase = require("../setEMA/WirewoodSymbiote");

class WirewoodSymbiote extends WirewoodSymbioteBase {
  constructor (game) {
    super(game, "Wirewood Symbiote", "Duel Decks Anthology: Elves vs. Goblins", "EVG");
  }
}

module.exports = WirewoodSymbiote;

"use strict";
const Constants = require ("../../../Constants");
const WirewoodSymbioteBase = require("../setEMA/WirewoodSymbiote");

class WirewoodSymbiote extends WirewoodSymbioteBase {
  constructor (game) {
    super(game, "Wirewood Symbiote", "Duel Decks: Elves vs. Goblins", "DD1");
  }
}

module.exports = WirewoodSymbiote;

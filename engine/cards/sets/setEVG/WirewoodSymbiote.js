"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WirewoodSymbioteBase = require("../setDD3_EVG/WirewoodSymbiote.js");

class WirewoodSymbiote extends WirewoodSymbioteBase {
  constructor(game) {
    super(game, "Wirewood Symbiote", "Duel Decks: Elves vs. Goblins", "EVG");
  }
}

module.exports = WirewoodSymbiote;

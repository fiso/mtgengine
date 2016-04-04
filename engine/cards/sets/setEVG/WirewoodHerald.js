"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WirewoodHeraldBase = require("../setDD3_EVG/WirewoodHerald.js");

class WirewoodHerald extends WirewoodHeraldBase {
  constructor(game) {
    super(game, "Wirewood Herald", "Duel Decks: Elves vs. Goblins", "EVG");
  }
}

module.exports = WirewoodHerald;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CaptainoftheWatch extends Card {
  constructor(game) {
    super(game, "Captain of the Watch", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = CaptainoftheWatch;

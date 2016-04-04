"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ForkedBolt extends Card {
  constructor(game) {
    super(game, "Forked Bolt", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = ForkedBolt;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ForkedBolt extends UnimplementedCard {
  constructor(game) {
    super(game, "Forked Bolt", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = ForkedBolt;

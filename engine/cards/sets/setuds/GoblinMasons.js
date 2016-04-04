"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinMasons extends Card {
  constructor(game) {
    super(game, "Goblin Masons", "Urza's Destiny", "UDS");
  }
}

module.exports = GoblinMasons;

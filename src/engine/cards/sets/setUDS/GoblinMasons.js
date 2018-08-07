"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinMasons extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Masons", "Urza's Destiny", "UDS");
  }
}

module.exports = GoblinMasons;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinFestival extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Festival", "Urza's Destiny", "UDS");
  }
}

module.exports = GoblinFestival;

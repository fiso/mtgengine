"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinRoughrider extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Roughrider", "Magic 2015", "M15");
  }
}

module.exports = GoblinRoughrider;

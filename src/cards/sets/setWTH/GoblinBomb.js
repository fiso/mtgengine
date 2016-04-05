"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinBomb extends UnimplementedCard {
  constructor(game) {
    super(game, "Goblin Bomb", "Weatherlight", "WTH");
  }
}

module.exports = GoblinBomb;

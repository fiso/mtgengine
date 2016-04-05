"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinCannon extends UnimplementedCard {
  constructor(game) {
    super(game, "Goblin Cannon", "Fifth Dawn", "5DN");
  }
}

module.exports = GoblinCannon;

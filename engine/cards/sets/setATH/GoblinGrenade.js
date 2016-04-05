"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinGrenade extends UnimplementedCard {
  constructor(game) {
    super(game, "Goblin Grenade", "Anthologies", "ATH");
  }
}

module.exports = GoblinGrenade;

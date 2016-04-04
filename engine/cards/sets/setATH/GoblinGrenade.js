"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinGrenade extends Card {
  constructor(game) {
    super(game, "Goblin Grenade", "Anthologies", "ATH");
  }
}

module.exports = GoblinGrenade;

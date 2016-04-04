"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinGrenadiers extends Card {
  constructor(game) {
    super(game, "Goblin Grenadiers", "Weatherlight", "WTH");
  }
}

module.exports = GoblinGrenadiers;

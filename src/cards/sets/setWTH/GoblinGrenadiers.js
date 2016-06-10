"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinGrenadiers extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Grenadiers", "Weatherlight", "WTH");
  }
}

module.exports = GoblinGrenadiers;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinDiggingTeam extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Digging Team", "Seventh Edition", "7ED");
  }
}

module.exports = GoblinDiggingTeam;

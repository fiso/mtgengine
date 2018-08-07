"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinDynamo extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Dynamo", "Legions", "LGN");
  }
}

module.exports = GoblinDynamo;

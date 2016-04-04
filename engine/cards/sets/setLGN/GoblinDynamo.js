"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinDynamo extends Card {
  constructor(game) {
    super(game, "Goblin Dynamo", "Legions", "LGN");
  }
}

module.exports = GoblinDynamo;

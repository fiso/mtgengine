"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GiantCrab extends Card {
  constructor(game) {
    super(game, "Giant Crab", "Beatdown Box Set", "BTD");
  }
}

module.exports = GiantCrab;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GiantCrab extends UnimplementedCard {
  constructor(game) {
    super(game, "Giant Crab", "Beatdown Box Set", "BTD");
  }
}

module.exports = GiantCrab;

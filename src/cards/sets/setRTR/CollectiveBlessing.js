"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CollectiveBlessing extends UnimplementedCard {
  constructor(game) {
    super(game, "Collective Blessing", "Return to Ravnica", "RTR");
  }
}

module.exports = CollectiveBlessing;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CollectiveBlessing extends Card {
  constructor(game) {
    super(game, "Collective Blessing", "Return to Ravnica", "RTR");
  }
}

module.exports = CollectiveBlessing;

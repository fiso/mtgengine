"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChronicFlooding extends Card {
  constructor(game) {
    super(game, "Chronic Flooding", "Return to Ravnica", "RTR");
  }
}

module.exports = ChronicFlooding;

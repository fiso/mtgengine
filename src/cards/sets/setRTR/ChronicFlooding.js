"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChronicFlooding extends UnimplementedCard {
  constructor(game) {
    super(game, "Chronic Flooding", "Return to Ravnica", "RTR");
  }
}

module.exports = ChronicFlooding;

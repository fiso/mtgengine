"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AgentoftheFates extends UnimplementedCard {
  constructor(game) {
    super(game, "Agent of the Fates", "Theros", "THS");
  }
}

module.exports = AgentoftheFates;

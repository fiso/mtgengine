"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AgentoftheFates extends Card {
  constructor(game) {
    super(game, "Agent of the Fates", "Theros", "THS");
  }
}

module.exports = AgentoftheFates;

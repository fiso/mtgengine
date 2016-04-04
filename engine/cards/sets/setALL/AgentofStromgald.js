"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AgentofStromgald extends Card {
  constructor(game) {
    super(game, "Agent of Stromgald", "Alliances", "ALL");
  }
}

module.exports = AgentofStromgald;

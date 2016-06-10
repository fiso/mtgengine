"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AgentofStromgald extends UnimplementedCard {
  constructor (game) {
    super(game, "Agent of Stromgald", "Alliances", "ALL");
  }
}

module.exports = AgentofStromgald;

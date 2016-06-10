"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AgentofErebos extends UnimplementedCard {
  constructor (game) {
    super(game, "Agent of Erebos", "Journey into Nyx", "JOU");
  }
}

module.exports = AgentofErebos;

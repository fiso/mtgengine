"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AgentofErebos extends Card {
  constructor(game) {
    super(game, "Agent of Erebos", "Journey into Nyx", "JOU");
  }
}

module.exports = AgentofErebos;

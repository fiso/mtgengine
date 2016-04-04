"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AgentofMasks extends Card {
  constructor(game) {
    super(game, "Agent of Masks", "Guildpact", "GPT");
  }
}

module.exports = AgentofMasks;

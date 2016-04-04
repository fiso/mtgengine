"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FlowofIdeas extends Card {
  constructor(game) {
    super(game, "Flow of Ideas", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = FlowofIdeas;

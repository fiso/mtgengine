"use strict";
const Constants = require ("../../../Constants");
const FlowofIdeasBase = require("../setSHM/FlowofIdeas");

class FlowofIdeas extends FlowofIdeasBase {
  constructor (game) {
    super(game, "Flow of Ideas", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = FlowofIdeas;

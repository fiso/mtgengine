"use strict";
const Constants = require ("../../../Constants");
const FlowofIdeasBase = require("../setRAV/FlowofIdeas");

class FlowofIdeas extends FlowofIdeasBase {
  constructor(game) {
    super(game, "Flow of Ideas", "Shadowmoor", "SHM");
  }
}

module.exports = FlowofIdeas;

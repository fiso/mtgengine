"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FlowofIdeasBase = require("../setRAV/FlowofIdeas.js");

class FlowofIdeas extends FlowofIdeasBase {
  constructor(game) {
    super(game, "Flow of Ideas", "Shadowmoor", "SHM");
  }
}

module.exports = FlowofIdeas;

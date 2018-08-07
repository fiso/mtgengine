"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlowofIdeas extends UnimplementedCard {
  constructor (game) {
    super(game, "Flow of Ideas", "Shadowmoor", "SHM");
  }
}

module.exports = FlowofIdeas;

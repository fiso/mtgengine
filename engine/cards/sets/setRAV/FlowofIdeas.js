"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlowofIdeas extends UnimplementedCard {
  constructor(game) {
    super(game, "Flow of Ideas", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = FlowofIdeas;

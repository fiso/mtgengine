"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ResearchAssistant extends UnimplementedCard {
  constructor (game) {
    super(game, "Research Assistant", "Magic 2015 Core Set", "M15");
  }
}

module.exports = ResearchAssistant;

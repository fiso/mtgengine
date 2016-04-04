"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ResearchAssistant extends Card {
  constructor(game) {
    super(game, "Research Assistant", "Magic 2015 Core Set", "M15");
  }
}

module.exports = ResearchAssistant;

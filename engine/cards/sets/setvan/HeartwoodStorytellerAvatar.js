"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HeartwoodStorytellerAvatar extends Card {
  constructor(game) {
    super(game, "Heartwood Storyteller Avatar", "Vanguard", "VAN");
  }
}

module.exports = HeartwoodStorytellerAvatar;

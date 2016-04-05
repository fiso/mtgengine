"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeartwoodStorytellerAvatar extends UnimplementedCard {
  constructor(game) {
    super(game, "Heartwood Storyteller Avatar", "Vanguard", "VAN");
  }
}

module.exports = HeartwoodStorytellerAvatar;

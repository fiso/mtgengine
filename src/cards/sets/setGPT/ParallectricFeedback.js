"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ParallectricFeedback extends UnimplementedCard {
  constructor(game) {
    super(game, "Parallectric Feedback", "Guildpact", "GPT");
  }
}

module.exports = ParallectricFeedback;

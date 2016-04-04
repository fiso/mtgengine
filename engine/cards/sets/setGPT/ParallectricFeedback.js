"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ParallectricFeedback extends Card {
  constructor(game) {
    super(game, "Parallectric Feedback", "Guildpact", "GPT");
  }
}

module.exports = ParallectricFeedback;

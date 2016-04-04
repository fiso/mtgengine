"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FeedbackBolt extends Card {
  constructor(game) {
    super(game, "Feedback Bolt", "Fifth Dawn", "5DN");
  }
}

module.exports = FeedbackBolt;

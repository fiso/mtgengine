"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FeedbackBolt extends UnimplementedCard {
  constructor (game) {
    super(game, "Feedback Bolt", "Fifth Dawn", "5DN");
  }
}

module.exports = FeedbackBolt;

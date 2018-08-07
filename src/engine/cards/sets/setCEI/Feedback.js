"use strict";
const Constants = require ("../../../Constants");
const FeedbackBase = require("../set5ED/Feedback");

class Feedback extends FeedbackBase {
  constructor (game) {
    super(game, "Feedback", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = Feedback;

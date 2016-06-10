"use strict";
const Constants = require ("../../../Constants");
const FeedbackBase = require("../setCED/Feedback");

class Feedback extends FeedbackBase {
  constructor (game) {
    super(game, "Feedback", "International Collector's Edition", "CEI");
  }
}

module.exports = Feedback;

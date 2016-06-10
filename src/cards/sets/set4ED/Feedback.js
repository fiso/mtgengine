"use strict";
const Constants = require ("../../../Constants");
const FeedbackBase = require("../setCED/Feedback");

class Feedback extends FeedbackBase {
  constructor (game) {
    super(game, "Feedback", "Fourth Edition", "4ED");
  }
}

module.exports = Feedback;

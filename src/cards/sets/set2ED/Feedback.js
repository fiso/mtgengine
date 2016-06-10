"use strict";
const Constants = require ("../../../Constants");
const FeedbackBase = require("../setCED/Feedback");

class Feedback extends FeedbackBase {
  constructor (game) {
    super(game, "Feedback", "Unlimited Edition", "2ED");
  }
}

module.exports = Feedback;

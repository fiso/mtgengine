"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FeedbackBase = require("../setCED/Feedback.js");

class Feedback extends FeedbackBase {
  constructor(game) {
    super(game, "Feedback", "Fourth Edition", "4ED");
  }
}

module.exports = Feedback;

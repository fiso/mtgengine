"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FeedbackBase = require("../setCED/Feedback.js");

class Feedback extends FeedbackBase {
  constructor(game) {
    super(game, "Feedback", "International Collector's Edition", "CEI");
  }
}

module.exports = Feedback;

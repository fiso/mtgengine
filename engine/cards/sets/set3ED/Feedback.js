"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FeedbackBase = require("../setCED/Feedback.js");

class Feedback extends FeedbackBase {
  constructor(game) {
    super(game, "Feedback", "Revised Edition", "3ED");
  }
}

module.exports = Feedback;

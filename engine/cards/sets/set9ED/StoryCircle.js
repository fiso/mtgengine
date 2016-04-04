"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StoryCircleBase = require("../set8ED/StoryCircle.js");

class StoryCircle extends StoryCircleBase {
  constructor(game) {
    super(game, "Story Circle", "Ninth Edition", "9ED");
  }
}

module.exports = StoryCircle;

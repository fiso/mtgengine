"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StoryCircleBase = require("../set8ED/StoryCircle.js");

class StoryCircle extends StoryCircleBase {
  constructor(game) {
    super(game, "Story Circle", "Tenth Edition", "10E");
  }
}

module.exports = StoryCircle;

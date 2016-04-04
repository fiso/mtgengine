"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StoryCircle extends Card {
  constructor(game) {
    super(game, "Story Circle", "Eighth Edition", "8ED");
  }
}

module.exports = StoryCircle;

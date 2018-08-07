"use strict";
const Constants = require ("../../../Constants");
const StoryCircleBase = require("../set10E/StoryCircle");

class StoryCircle extends StoryCircleBase {
  constructor (game) {
    super(game, "Story Circle", "Mercadian Masques", "MMQ");
  }
}

module.exports = StoryCircle;

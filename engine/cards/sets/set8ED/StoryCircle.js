"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StoryCircle extends UnimplementedCard {
  constructor(game) {
    super(game, "Story Circle", "Eighth Edition", "8ED");
  }
}

module.exports = StoryCircle;

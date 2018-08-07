"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StoryCircle extends UnimplementedCard {
  constructor (game) {
    super(game, "Story Circle", "Tenth Edition", "10E");
  }
}

module.exports = StoryCircle;

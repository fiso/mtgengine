"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FeedtheMachine extends UnimplementedCard {
  constructor(game) {
    super(game, "Feed the Machine", "Archenemy", "ARC");
  }
}

module.exports = FeedtheMachine;

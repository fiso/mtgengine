"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FeedtheMachine extends Card {
  constructor(game) {
    super(game, "Feed the Machine", "Archenemy", "ARC");
  }
}

module.exports = FeedtheMachine;

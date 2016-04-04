"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TrainedOrgg extends Card {
  constructor(game) {
    super(game, "Trained Orgg", "Seventh Edition", "7ED");
  }
}

module.exports = TrainedOrgg;

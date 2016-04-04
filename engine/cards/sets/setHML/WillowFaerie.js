"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WillowFaerie extends Card {
  constructor(game) {
    super(game, "Willow Faerie", "Homelands", "HML");
  }
}

module.exports = WillowFaerie;

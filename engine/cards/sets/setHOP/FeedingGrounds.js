"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FeedingGrounds extends Card {
  constructor(game) {
    super(game, "Feeding Grounds", "Planechase", "HOP");
  }
}

module.exports = FeedingGrounds;

"use strict";
const Constants = require ("../../../Constants");
const FeedingGroundsBase = require("../setPCA/FeedingGrounds");

class FeedingGrounds extends FeedingGroundsBase {
  constructor (game) {
    super(game, "Feeding Grounds", "Planechase", "HOP");
  }
}

module.exports = FeedingGrounds;

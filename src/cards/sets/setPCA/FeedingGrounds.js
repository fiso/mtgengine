"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FeedingGrounds extends UnimplementedCard {
  constructor (game) {
    super(game, "Feeding Grounds", "Planechase Anthology", "PCA");
  }
}

module.exports = FeedingGrounds;

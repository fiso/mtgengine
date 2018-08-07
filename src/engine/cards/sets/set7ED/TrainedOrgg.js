"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TrainedOrgg extends UnimplementedCard {
  constructor (game) {
    super(game, "Trained Orgg", "Seventh Edition", "7ED");
  }
}

module.exports = TrainedOrgg;

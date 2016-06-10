"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WillowFaerie extends UnimplementedCard {
  constructor (game) {
    super(game, "Willow Faerie", "Homelands", "HML");
  }
}

module.exports = WillowFaerie;

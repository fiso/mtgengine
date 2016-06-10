"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FaerieNoble extends UnimplementedCard {
  constructor (game) {
    super(game, "Faerie Noble", "Homelands", "HML");
  }
}

module.exports = FaerieNoble;

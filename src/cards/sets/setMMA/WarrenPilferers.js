"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WarrenPilferers extends UnimplementedCard {
  constructor (game) {
    super(game, "Warren Pilferers", "Modern Masters", "MMA");
  }
}

module.exports = WarrenPilferers;

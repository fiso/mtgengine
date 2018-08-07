"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RoyalFalcon extends UnimplementedCard {
  constructor (game) {
    super(game, "Royal Falcon", "Starter 2000", "S00");
  }
}

module.exports = RoyalFalcon;

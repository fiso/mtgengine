"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RoyalFalcon extends UnimplementedCard {
  constructor(game) {
    super(game, "Royal Falcon", "Starter 1999", "S99");
  }
}

module.exports = RoyalFalcon;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LoyalDrake extends UnimplementedCard {
  constructor (game) {
    super(game, "Loyal Drake", "Commander 2018", "C18");
  }
}

module.exports = LoyalDrake;

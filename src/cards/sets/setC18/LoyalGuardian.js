"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LoyalGuardian extends UnimplementedCard {
  constructor (game) {
    super(game, "Loyal Guardian", "Commander 2018", "C18");
  }
}

module.exports = LoyalGuardian;

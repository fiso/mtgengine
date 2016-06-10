"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FaithHealer extends UnimplementedCard {
  constructor (game) {
    super(game, "Faith Healer", "Urza's Saga", "USG");
  }
}

module.exports = FaithHealer;

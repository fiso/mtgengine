"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WoodenStake extends UnimplementedCard {
  constructor (game) {
    super(game, "Wooden Stake", "Innistrad", "ISD");
  }
}

module.exports = WoodenStake;

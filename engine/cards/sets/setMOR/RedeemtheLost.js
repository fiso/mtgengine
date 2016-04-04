"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RedeemtheLost extends UnimplementedCard {
  constructor(game) {
    super(game, "Redeem the Lost", "Morningtide", "MOR");
  }
}

module.exports = RedeemtheLost;

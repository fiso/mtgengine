"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AshnodsCoupon extends UnimplementedCard {
  constructor(game) {
    super(game, "Ashnod's Coupon", "Arena League", "pARL");
  }
}

module.exports = AshnodsCoupon;

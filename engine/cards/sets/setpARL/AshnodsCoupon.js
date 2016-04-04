"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AshnodsCoupon extends Card {
  constructor(game) {
    super(game, "Ashnod's Coupon", "Arena League", "pARL");
  }
}

module.exports = AshnodsCoupon;

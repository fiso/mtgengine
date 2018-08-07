"use strict";
const Constants = require ("../../../Constants");
const AshnodsCouponBase = require("../setPAL04/AshnodsCoupon");

class AshnodsCoupon extends AshnodsCouponBase {
  constructor (game) {
    super(game, "Ashnod's Coupon", "Unglued", "UGL");
  }
}

module.exports = AshnodsCoupon;

"use strict";
const Constants = require ("../../../Constants");
const AshnodsCouponBase = require("../setpARL/AshnodsCoupon");

class AshnodsCoupon extends AshnodsCouponBase {
  constructor (game) {
    super(game, "Ashnod's Coupon", "Unglued", "UGL");
  }
}

module.exports = AshnodsCoupon;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AshnodsCouponBase = require("../setpARL/AshnodsCoupon.js");

class AshnodsCoupon extends AshnodsCouponBase {
  constructor(game) {
    super(game, "Ashnod's Coupon", "Unglued", "UGL");
  }
}

module.exports = AshnodsCoupon;

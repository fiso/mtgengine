"use strict";
const Constants = require ("../../../Constants");
const MerchantScrollBase = require("../setJ18/MerchantScroll");

class MerchantScroll extends MerchantScrollBase {
  constructor (game) {
    super(game, "Merchant Scroll", "Homelands", "HML");
  }
}

module.exports = MerchantScroll;

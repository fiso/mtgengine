"use strict";
const Constants = require ("../../../Constants");
const MerchantScrollBase = require("../set8ED/MerchantScroll");

class MerchantScroll extends MerchantScrollBase {
  constructor (game) {
    super(game, "Merchant Scroll", "Homelands", "HML");
  }
}

module.exports = MerchantScroll;

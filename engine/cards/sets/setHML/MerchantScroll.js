"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MerchantScrollBase = require("../set8ED/MerchantScroll.js");

class MerchantScroll extends MerchantScrollBase {
  constructor(game) {
    super(game, "Merchant Scroll", "Homelands", "HML");
  }
}

module.exports = MerchantScroll;

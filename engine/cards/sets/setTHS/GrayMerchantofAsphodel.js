"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GrayMerchantofAsphodelBase = require("../setC14/GrayMerchantofAsphodel.js");

class GrayMerchantofAsphodel extends GrayMerchantofAsphodelBase {
  constructor(game) {
    super(game, "Gray Merchant of Asphodel", "Theros", "THS");
  }
}

module.exports = GrayMerchantofAsphodel;

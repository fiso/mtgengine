"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MerchantScroll extends UnimplementedCard {
  constructor(game) {
    super(game, "Merchant Scroll", "Eighth Edition", "8ED");
  }
}

module.exports = MerchantScroll;

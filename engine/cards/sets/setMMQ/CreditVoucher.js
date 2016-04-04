"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CreditVoucher extends Card {
  constructor(game) {
    super(game, "Credit Voucher", "Mercadian Masques", "MMQ");
  }
}

module.exports = CreditVoucher;

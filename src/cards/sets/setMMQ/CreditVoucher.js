"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CreditVoucher extends UnimplementedCard {
  constructor (game) {
    super(game, "Credit Voucher", "Mercadian Masques", "MMQ");
  }
}

module.exports = CreditVoucher;

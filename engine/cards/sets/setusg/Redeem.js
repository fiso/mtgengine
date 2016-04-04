"use strict";
const Constants = require ("../../../Constants");
const RedeemBase = require("../set8ED/Redeem");

class Redeem extends RedeemBase {
  constructor(game) {
    super(game, "Redeem", "Urza's Saga", "USG");
  }
}

module.exports = Redeem;

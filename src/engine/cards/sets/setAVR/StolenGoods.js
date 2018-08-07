"use strict";
const Constants = require ("../../../Constants");
const StolenGoodsBase = require("../setC15/StolenGoods");

class StolenGoods extends StolenGoodsBase {
  constructor (game) {
    super(game, "Stolen Goods", "Avacyn Restored", "AVR");
  }
}

module.exports = StolenGoods;

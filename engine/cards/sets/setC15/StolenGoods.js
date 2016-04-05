"use strict";
const Constants = require ("../../../Constants");
const StolenGoodsBase = require("../setAVR/StolenGoods");

class StolenGoods extends StolenGoodsBase {
  constructor(game) {
    super(game, "Stolen Goods", "Commander 2015", "C15");
  }
}

module.exports = StolenGoods;

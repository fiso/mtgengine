"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StolenGoodsBase = require("../setAVR/StolenGoods.js");

class StolenGoods extends StolenGoodsBase {
  constructor(game) {
    super(game, "Stolen Goods", "Commander 2015", "C15");
  }
}

module.exports = StolenGoods;

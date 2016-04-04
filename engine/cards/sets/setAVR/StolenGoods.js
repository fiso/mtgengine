"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StolenGoods extends Card {
  constructor(game) {
    super(game, "Stolen Goods", "Avacyn Restored", "AVR");
  }
}

module.exports = StolenGoods;

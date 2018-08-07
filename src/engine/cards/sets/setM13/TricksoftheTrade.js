"use strict";
const Constants = require ("../../../Constants");
const TricksoftheTradeBase = require("../setW17/TricksoftheTrade");

class TricksoftheTrade extends TricksoftheTradeBase {
  constructor (game) {
    super(game, "Tricks of the Trade", "Magic 2013", "M13");
  }
}

module.exports = TricksoftheTrade;

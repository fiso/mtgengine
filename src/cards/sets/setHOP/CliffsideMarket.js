"use strict";
const Constants = require ("../../../Constants");
const CliffsideMarketBase = require("../setPCA/CliffsideMarket");

class CliffsideMarket extends CliffsideMarketBase {
  constructor (game) {
    super(game, "Cliffside Market", "Planechase", "HOP");
  }
}

module.exports = CliffsideMarket;

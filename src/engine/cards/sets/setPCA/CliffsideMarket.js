"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CliffsideMarket extends UnimplementedCard {
  constructor (game) {
    super(game, "Cliffside Market", "Planechase Anthology", "PCA");
  }
}

module.exports = CliffsideMarket;

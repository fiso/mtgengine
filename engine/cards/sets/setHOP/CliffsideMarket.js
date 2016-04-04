"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CliffsideMarket extends Card {
  constructor(game) {
    super(game, "Cliffside Market", "Planechase", "HOP");
  }
}

module.exports = CliffsideMarket;

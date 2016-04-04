"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CorneredMarket extends Card {
  constructor(game) {
    super(game, "Cornered Market", "Mercadian Masques", "MMQ");
  }
}

module.exports = CorneredMarket;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CorneredMarket extends UnimplementedCard {
  constructor (game) {
    super(game, "Cornered Market", "Mercadian Masques", "MMQ");
  }
}

module.exports = CorneredMarket;

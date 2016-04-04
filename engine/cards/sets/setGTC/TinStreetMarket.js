"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TinStreetMarket extends UnimplementedCard {
  constructor(game) {
    super(game, "Tin Street Market", "Gatecrash", "GTC");
  }
}

module.exports = TinStreetMarket;

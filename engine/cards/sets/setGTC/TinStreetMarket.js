"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TinStreetMarket extends Card {
  constructor(game) {
    super(game, "Tin Street Market", "Gatecrash", "GTC");
  }
}

module.exports = TinStreetMarket;

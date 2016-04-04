"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArmoredTransport extends UnimplementedCard {
  constructor(game) {
    super(game, "Armored Transport", "Gatecrash", "GTC");
  }
}

module.exports = ArmoredTransport;

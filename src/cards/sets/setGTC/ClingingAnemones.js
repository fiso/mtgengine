"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ClingingAnemones extends UnimplementedCard {
  constructor(game) {
    super(game, "Clinging Anemones", "Gatecrash", "GTC");
  }
}

module.exports = ClingingAnemones;

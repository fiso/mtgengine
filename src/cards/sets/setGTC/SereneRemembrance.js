"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SereneRemembrance extends UnimplementedCard {
  constructor (game) {
    super(game, "Serene Remembrance", "Gatecrash", "GTC");
  }
}

module.exports = SereneRemembrance;

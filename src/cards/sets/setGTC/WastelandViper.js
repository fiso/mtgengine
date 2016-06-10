"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WastelandViper extends UnimplementedCard {
  constructor (game) {
    super(game, "Wasteland Viper", "Gatecrash", "GTC");
  }
}

module.exports = WastelandViper;

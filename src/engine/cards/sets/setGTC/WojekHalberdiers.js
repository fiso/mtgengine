"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WojekHalberdiers extends UnimplementedCard {
  constructor (game) {
    super(game, "Wojek Halberdiers", "Gatecrash", "GTC");
  }
}

module.exports = WojekHalberdiers;

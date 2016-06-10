"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChillingShade extends UnimplementedCard {
  constructor (game) {
    super(game, "Chilling Shade", "Coldsnap", "CSP");
  }
}

module.exports = ChillingShade;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChillingShade extends Card {
  constructor(game) {
    super(game, "Chilling Shade", "Coldsnap", "CSP");
  }
}

module.exports = ChillingShade;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WojekHalberdiers extends Card {
  constructor(game) {
    super(game, "Wojek Halberdiers", "Gatecrash", "GTC");
  }
}

module.exports = WojekHalberdiers;

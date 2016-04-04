"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AlphaAuthority extends Card {
  constructor(game) {
    super(game, "Alpha Authority", "Gatecrash", "GTC");
  }
}

module.exports = AlphaAuthority;

"use strict";
const Constants = require ("../../../Constants");
const FathomMageBase = require("../setCM2/FathomMage");

class FathomMage extends FathomMageBase {
  constructor (game) {
    super(game, "Fathom Mage", "Gatecrash", "GTC");
  }
}

module.exports = FathomMage;

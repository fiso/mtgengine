"use strict";
const Constants = require ("../../../Constants");
const LoyalPegasusBase = require("../setBBD/LoyalPegasus");

class LoyalPegasus extends LoyalPegasusBase {
  constructor (game) {
    super(game, "Loyal Pegasus", "Born of the Gods", "BNG");
  }
}

module.exports = LoyalPegasus;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TangleWire extends UnimplementedCard {
  constructor(game) {
    super(game, "Tangle Wire", "From the Vault: Twenty", "V13");
  }
}

module.exports = TangleWire;

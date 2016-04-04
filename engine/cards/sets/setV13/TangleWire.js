"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TangleWire extends Card {
  constructor(game) {
    super(game, "Tangle Wire", "From the Vault: Twenty", "V13");
  }
}

module.exports = TangleWire;

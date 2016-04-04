"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EntertheInfinite extends Card {
  constructor(game) {
    super(game, "Enter the Infinite", "Gatecrash", "GTC");
  }
}

module.exports = EntertheInfinite;

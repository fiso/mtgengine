"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShatteringBlow extends Card {
  constructor(game) {
    super(game, "Shattering Blow", "Gatecrash", "GTC");
  }
}

module.exports = ShatteringBlow;

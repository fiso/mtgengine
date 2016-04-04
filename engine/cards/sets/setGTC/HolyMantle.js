"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HolyMantle extends Card {
  constructor(game) {
    super(game, "Holy Mantle", "Gatecrash", "GTC");
  }
}

module.exports = HolyMantle;

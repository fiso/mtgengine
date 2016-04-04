"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SereneRemembrance extends Card {
  constructor(game) {
    super(game, "Serene Remembrance", "Gatecrash", "GTC");
  }
}

module.exports = SereneRemembrance;

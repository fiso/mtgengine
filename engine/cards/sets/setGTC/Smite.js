"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Smite extends Card {
  constructor(game) {
    super(game, "Smite", "Gatecrash", "GTC");
  }
}

module.exports = Smite;

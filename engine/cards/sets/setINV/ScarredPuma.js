"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ScarredPuma extends Card {
  constructor(game) {
    super(game, "Scarred Puma", "Invasion", "INV");
  }
}

module.exports = ScarredPuma;

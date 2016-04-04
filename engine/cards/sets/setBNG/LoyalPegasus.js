"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LoyalPegasus extends Card {
  constructor(game) {
    super(game, "Loyal Pegasus", "Born of the Gods", "BNG");
  }
}

module.exports = LoyalPegasus;

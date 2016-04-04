"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ForsakenSanctuary extends Card {
  constructor(game) {
    super(game, "Forsaken Sanctuary", "Shadows over Innistrad", "SOI");
  }
}

module.exports = ForsakenSanctuary;

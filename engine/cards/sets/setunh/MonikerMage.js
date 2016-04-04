"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MonikerMage extends Card {
  constructor(game) {
    super(game, "Moniker Mage", "Unhinged", "UNH");
  }
}

module.exports = MonikerMage;

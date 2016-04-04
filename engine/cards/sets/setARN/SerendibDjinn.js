"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SerendibDjinn extends Card {
  constructor(game) {
    super(game, "Serendib Djinn", "Arabian Nights", "ARN");
  }
}

module.exports = SerendibDjinn;

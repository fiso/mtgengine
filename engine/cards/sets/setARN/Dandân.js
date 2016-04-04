"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Dandân extends Card {
  constructor(game) {
    super(game, "Dandân", "Arabian Nights", "ARN");
  }
}

module.exports = Dandân;

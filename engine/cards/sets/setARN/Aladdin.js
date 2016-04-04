"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Aladdin extends Card {
  constructor(game) {
    super(game, "Aladdin", "Arabian Nights", "ARN");
  }
}

module.exports = Aladdin;

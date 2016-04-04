"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JandorsSaddlebags extends Card {
  constructor(game) {
    super(game, "Jandor's Saddlebags", "Arabian Nights", "ARN");
  }
}

module.exports = JandorsSaddlebags;

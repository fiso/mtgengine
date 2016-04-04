"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JandorsRing extends Card {
  constructor(game) {
    super(game, "Jandor's Ring", "Arabian Nights", "ARN");
  }
}

module.exports = JandorsRing;

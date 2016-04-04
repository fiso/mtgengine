"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EbonyHorse extends Card {
  constructor(game) {
    super(game, "Ebony Horse", "Arabian Nights", "ARN");
  }
}

module.exports = EbonyHorse;

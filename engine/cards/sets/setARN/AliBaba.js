"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AliBaba extends Card {
  constructor(game) {
    super(game, "Ali Baba", "Arabian Nights", "ARN");
  }
}

module.exports = AliBaba;

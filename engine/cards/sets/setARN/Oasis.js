"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Oasis extends Card {
  constructor(game) {
    super(game, "Oasis", "Arabian Nights", "ARN");
  }
}

module.exports = Oasis;

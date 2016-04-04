"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Jihad extends Card {
  constructor(game) {
    super(game, "Jihad", "Arabian Nights", "ARN");
  }
}

module.exports = Jihad;

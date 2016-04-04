"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MijaeDjinn extends Card {
  constructor(game) {
    super(game, "Mijae Djinn", "Arabian Nights", "ARN");
  }
}

module.exports = MijaeDjinn;

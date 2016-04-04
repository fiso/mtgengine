"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Sandstorm extends Card {
  constructor(game) {
    super(game, "Sandstorm", "Arabian Nights", "ARN");
  }
}

module.exports = Sandstorm;

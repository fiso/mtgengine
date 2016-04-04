"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Piety extends Card {
  constructor(game) {
    super(game, "Piety", "Arabian Nights", "ARN");
  }
}

module.exports = Piety;

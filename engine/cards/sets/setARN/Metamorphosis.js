"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Metamorphosis extends Card {
  constructor(game) {
    super(game, "Metamorphosis", "Arabian Nights", "ARN");
  }
}

module.exports = Metamorphosis;

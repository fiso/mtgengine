"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ElHajjâj extends Card {
  constructor(game) {
    super(game, "El-Hajjâj", "Arabian Nights", "ARN");
  }
}

module.exports = ElHajjâj;

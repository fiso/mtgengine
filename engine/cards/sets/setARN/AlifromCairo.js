"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AlifromCairo extends Card {
  constructor(game) {
    super(game, "Ali from Cairo", "Arabian Nights", "ARN");
  }
}

module.exports = AlifromCairo;

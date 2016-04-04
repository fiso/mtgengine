"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FlyingMen extends Card {
  constructor(game) {
    super(game, "Flying Men", "Arabian Nights", "ARN");
  }
}

module.exports = FlyingMen;

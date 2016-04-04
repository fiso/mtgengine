"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FlyingCarpet extends Card {
  constructor(game) {
    super(game, "Flying Carpet", "Arabian Nights", "ARN");
  }
}

module.exports = FlyingCarpet;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BottleofSuleiman extends Card {
  constructor(game) {
    super(game, "Bottle of Suleiman", "Arabian Nights", "ARN");
  }
}

module.exports = BottleofSuleiman;

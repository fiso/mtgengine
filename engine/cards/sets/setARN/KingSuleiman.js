"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KingSuleiman extends Card {
  constructor(game) {
    super(game, "King Suleiman", "Arabian Nights", "ARN");
  }
}

module.exports = KingSuleiman;

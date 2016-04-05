"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KingSuleiman extends UnimplementedCard {
  constructor(game) {
    super(game, "King Suleiman", "Arabian Nights", "ARN");
  }
}

module.exports = KingSuleiman;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BottleofSuleiman extends UnimplementedCard {
  constructor(game) {
    super(game, "Bottle of Suleiman", "Arabian Nights", "ARN");
  }
}

module.exports = BottleofSuleiman;

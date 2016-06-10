"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KhalniGarden extends UnimplementedCard {
  constructor (game) {
    super(game, "Khalni Garden", "Archenemy", "ARC");
  }
}

module.exports = KhalniGarden;

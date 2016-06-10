"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KavuPrimarch extends UnimplementedCard {
  constructor (game) {
    super(game, "Kavu Primarch", "Future Sight", "FUT");
  }
}

module.exports = KavuPrimarch;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KavuPrimarch extends UnimplementedCard {
  constructor (game) {
    super(game, "Kavu Primarch", "Modern Masters 2015", "MM2");
  }
}

module.exports = KavuPrimarch;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LuminarchAscension extends UnimplementedCard {
  constructor (game) {
    super(game, "Luminarch Ascension", "Masters 25", "A25");
  }
}

module.exports = LuminarchAscension;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeartlessPillage extends UnimplementedCard {
  constructor (game) {
    super(game, "Heartless Pillage", "Ixalan", "XLN");
  }
}

module.exports = HeartlessPillage;

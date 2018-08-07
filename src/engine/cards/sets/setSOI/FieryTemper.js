"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FieryTemper extends UnimplementedCard {
  constructor (game) {
    super(game, "Fiery Temper", "Shadows over Innistrad", "SOI");
  }
}

module.exports = FieryTemper;

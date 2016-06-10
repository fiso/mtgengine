"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FieryTemper extends UnimplementedCard {
  constructor (game) {
    super(game, "Fiery Temper", "Gateway", "pGTW");
  }
}

module.exports = FieryTemper;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WindSail extends UnimplementedCard {
  constructor (game) {
    super(game, "Wind Sail", "Portal Second Age", "PO2");
  }
}

module.exports = WindSail;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Dandan extends UnimplementedCard {
  constructor(game) {
    super(game, "Dandân", "Arabian Nights", "ARN");
  }
}

module.exports = Dandan;

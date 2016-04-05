"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SerendibDjinn extends UnimplementedCard {
  constructor(game) {
    super(game, "Serendib Djinn", "Arabian Nights", "ARN");
  }
}

module.exports = SerendibDjinn;

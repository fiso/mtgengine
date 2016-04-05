"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Jihad extends UnimplementedCard {
  constructor(game) {
    super(game, "Jihad", "Arabian Nights", "ARN");
  }
}

module.exports = Jihad;

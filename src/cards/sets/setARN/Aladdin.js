"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Aladdin extends UnimplementedCard {
  constructor (game) {
    super(game, "Aladdin", "Arabian Nights", "ARN");
  }
}

module.exports = Aladdin;

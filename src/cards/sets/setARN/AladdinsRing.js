"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AladdinsRing extends UnimplementedCard {
  constructor (game) {
    super(game, "Aladdin's Ring", "Arabian Nights", "ARN");
  }
}

module.exports = AladdinsRing;

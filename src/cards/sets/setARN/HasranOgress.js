"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HasranOgress extends UnimplementedCard {
  constructor(game) {
    super(game, "Hasran Ogress", "Arabian Nights", "ARN");
  }
}

module.exports = HasranOgress;

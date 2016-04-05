"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EbonyHorse extends UnimplementedCard {
  constructor(game) {
    super(game, "Ebony Horse", "Arabian Nights", "ARN");
  }
}

module.exports = EbonyHorse;

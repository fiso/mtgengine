"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AlifromCairo extends UnimplementedCard {
  constructor(game) {
    super(game, "Ali from Cairo", "Arabian Nights", "ARN");
  }
}

module.exports = AlifromCairo;

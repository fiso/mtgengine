"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElHajjâj extends UnimplementedCard {
  constructor(game) {
    super(game, "El-Hajjâj", "Arabian Nights", "ARN");
  }
}

module.exports = ElHajjâj;

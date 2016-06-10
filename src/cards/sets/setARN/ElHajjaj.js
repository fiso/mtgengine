"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElHajjaj extends UnimplementedCard {
  constructor (game) {
    super(game, "El-Hajjâj", "Arabian Nights", "ARN");
  }
}

module.exports = ElHajjaj;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Metamorphosis extends UnimplementedCard {
  constructor (game) {
    super(game, "Metamorphosis", "Arabian Nights", "ARN");
  }
}

module.exports = Metamorphosis;

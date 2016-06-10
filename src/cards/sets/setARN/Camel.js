"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Camel extends UnimplementedCard {
  constructor (game) {
    super(game, "Camel", "Arabian Nights", "ARN");
  }
}

module.exports = Camel;

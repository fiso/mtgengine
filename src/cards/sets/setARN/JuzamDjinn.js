"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JuzamDjinn extends UnimplementedCard {
  constructor (game) {
    super(game, "Juzám Djinn", "Arabian Nights", "ARN");
  }
}

module.exports = JuzamDjinn;

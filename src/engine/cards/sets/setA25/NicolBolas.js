"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NicolBolas extends UnimplementedCard {
  constructor (game) {
    super(game, "Nicol Bolas", "Masters 25", "A25");
  }
}

module.exports = NicolBolas;

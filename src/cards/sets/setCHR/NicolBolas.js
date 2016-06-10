"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NicolBolas extends UnimplementedCard {
  constructor (game) {
    super(game, "Nicol Bolas", "Chronicles", "CHR");
  }
}

module.exports = NicolBolas;

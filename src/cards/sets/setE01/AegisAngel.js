"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AegisAngel extends UnimplementedCard {
  constructor (game) {
    super(game, "Aegis Angel", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = AegisAngel;

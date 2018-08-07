"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Dreadbore extends UnimplementedCard {
  constructor (game) {
    super(game, "Dreadbore", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = Dreadbore;

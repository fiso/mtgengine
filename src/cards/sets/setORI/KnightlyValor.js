"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KnightlyValor extends UnimplementedCard {
  constructor (game) {
    super(game, "Knightly Valor", "Magic Origins", "ORI");
  }
}

module.exports = KnightlyValor;

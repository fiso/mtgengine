"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KnightlyValor extends UnimplementedCard {
  constructor (game) {
    super(game, "Knightly Valor", "Core Set 2019", "M19");
  }
}

module.exports = KnightlyValor;

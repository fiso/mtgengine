"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KnightofValor extends UnimplementedCard {
  constructor(game) {
    super(game, "Knight of Valor", "Visions", "VIS");
  }
}

module.exports = KnightofValor;

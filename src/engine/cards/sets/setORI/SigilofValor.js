"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SigilofValor extends UnimplementedCard {
  constructor (game) {
    super(game, "Sigil of Valor", "Magic Origins", "ORI");
  }
}

module.exports = SigilofValor;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SigilofValor extends Card {
  constructor(game) {
    super(game, "Sigil of Valor", "Magic Origins", "ORI");
  }
}

module.exports = SigilofValor;

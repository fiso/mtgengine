"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KnightlyValor extends Card {
  constructor(game) {
    super(game, "Knightly Valor", "Magic Origins", "ORI");
  }
}

module.exports = KnightlyValor;

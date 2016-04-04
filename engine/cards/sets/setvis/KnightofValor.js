"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KnightofValor extends Card {
  constructor(game) {
    super(game, "Knight of Valor", "Visions", "VIS");
  }
}

module.exports = KnightofValor;

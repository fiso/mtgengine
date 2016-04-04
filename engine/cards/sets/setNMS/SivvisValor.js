"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SivvisValor extends Card {
  constructor(game) {
    super(game, "Sivvi's Valor", "Nemesis", "NMS");
  }
}

module.exports = SivvisValor;

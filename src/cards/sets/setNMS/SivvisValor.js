"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SivvisValor extends UnimplementedCard {
  constructor (game) {
    super(game, "Sivvi's Valor", "Nemesis", "NMS");
  }
}

module.exports = SivvisValor;

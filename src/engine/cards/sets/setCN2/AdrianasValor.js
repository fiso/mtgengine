"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AdrianasValor extends UnimplementedCard {
  constructor (game) {
    super(game, "Adriana's Valor", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = AdrianasValor;

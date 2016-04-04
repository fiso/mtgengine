"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShowofValor extends UnimplementedCard {
  constructor(game) {
    super(game, "Show of Valor", "Magic 2013", "M13");
  }
}

module.exports = ShowofValor;

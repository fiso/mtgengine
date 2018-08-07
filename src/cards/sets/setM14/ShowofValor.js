"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShowofValor extends UnimplementedCard {
  constructor (game) {
    super(game, "Show of Valor", "Magic 2014", "M14");
  }
}

module.exports = ShowofValor;

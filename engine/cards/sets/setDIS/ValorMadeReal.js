"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ValorMadeReal extends UnimplementedCard {
  constructor(game) {
    super(game, "Valor Made Real", "Dissension", "DIS");
  }
}

module.exports = ValorMadeReal;

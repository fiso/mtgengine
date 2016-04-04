"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BattlewiseValor extends UnimplementedCard {
  constructor(game) {
    super(game, "Battlewise Valor", "Theros", "THS");
  }
}

module.exports = BattlewiseValor;

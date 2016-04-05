"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NyxInfusion extends UnimplementedCard {
  constructor(game) {
    super(game, "Nyx Infusion", "Journey into Nyx", "JOU");
  }
}

module.exports = NyxInfusion;

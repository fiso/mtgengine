"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ValorousStance extends UnimplementedCard {
  constructor (game) {
    super(game, "Valorous Stance", "Magic Origins Clash Pack", "CP3");
  }
}

module.exports = ValorousStance;

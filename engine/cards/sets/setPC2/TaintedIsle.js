"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TaintedIsle extends UnimplementedCard {
  constructor(game) {
    super(game, "Tainted Isle", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = TaintedIsle;

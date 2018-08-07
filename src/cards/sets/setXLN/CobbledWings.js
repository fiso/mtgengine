"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CobbledWings extends UnimplementedCard {
  constructor (game) {
    super(game, "Cobbled Wings", "Ixalan", "XLN");
  }
}

module.exports = CobbledWings;

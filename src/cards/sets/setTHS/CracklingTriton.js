"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CracklingTriton extends UnimplementedCard {
  constructor (game) {
    super(game, "Crackling Triton", "Theros", "THS");
  }
}

module.exports = CracklingTriton;

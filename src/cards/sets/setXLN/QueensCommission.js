"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class QueensCommission extends UnimplementedCard {
  constructor (game) {
    super(game, "Queen's Commission", "Ixalan", "XLN");
  }
}

module.exports = QueensCommission;

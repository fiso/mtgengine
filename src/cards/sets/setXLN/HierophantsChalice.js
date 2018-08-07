"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HierophantsChalice extends UnimplementedCard {
  constructor (game) {
    super(game, "Hierophant's Chalice", "Ixalan", "XLN");
  }
}

module.exports = HierophantsChalice;

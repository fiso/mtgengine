"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CustodiLich extends UnimplementedCard {
  constructor (game) {
    super(game, "Custodi Lich", "You Make the Cube", "PZ2");
  }
}

module.exports = CustodiLich;

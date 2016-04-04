"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BashtoBits extends UnimplementedCard {
  constructor(game) {
    super(game, "Bash to Bits", "Odyssey", "ODY");
  }
}

module.exports = BashtoBits;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DiamondFaerie extends UnimplementedCard {
  constructor(game) {
    super(game, "Diamond Faerie", "Coldsnap", "CSP");
  }
}

module.exports = DiamondFaerie;

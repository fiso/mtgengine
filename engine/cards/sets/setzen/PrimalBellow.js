"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PrimalBellow extends UnimplementedCard {
  constructor(game) {
    super(game, "Primal Bellow", "Zendikar", "ZEN");
  }
}

module.exports = PrimalBellow;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BalancingAct extends UnimplementedCard {
  constructor(game) {
    super(game, "Balancing Act", "Odyssey", "ODY");
  }
}

module.exports = BalancingAct;

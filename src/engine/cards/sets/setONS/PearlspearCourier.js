"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PearlspearCourier extends UnimplementedCard {
  constructor (game) {
    super(game, "Pearlspear Courier", "Onslaught", "ONS");
  }
}

module.exports = PearlspearCourier;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Unburden extends UnimplementedCard {
  constructor (game) {
    super(game, "Unburden", "Scourge", "SCG");
  }
}

module.exports = Unburden;

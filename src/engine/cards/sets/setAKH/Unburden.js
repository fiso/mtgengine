"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Unburden extends UnimplementedCard {
  constructor (game) {
    super(game, "Unburden", "Amonkhet", "AKH");
  }
}

module.exports = Unburden;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DynavoltTower extends UnimplementedCard {
  constructor (game) {
    super(game, "Dynavolt Tower", "Kaladesh", "KLD");
  }
}

module.exports = DynavoltTower;

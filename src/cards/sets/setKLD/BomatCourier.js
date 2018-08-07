"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BomatCourier extends UnimplementedCard {
  constructor (game) {
    super(game, "Bomat Courier", "Kaladesh", "KLD");
  }
}

module.exports = BomatCourier;

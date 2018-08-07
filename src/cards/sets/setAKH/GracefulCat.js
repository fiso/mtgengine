"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GracefulCat extends UnimplementedCard {
  constructor (game) {
    super(game, "Graceful Cat", "Amonkhet", "AKH");
  }
}

module.exports = GracefulCat;

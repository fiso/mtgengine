"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RegalCaracal extends UnimplementedCard {
  constructor (game) {
    super(game, "Regal Caracal", "Amonkhet", "AKH");
  }
}

module.exports = RegalCaracal;

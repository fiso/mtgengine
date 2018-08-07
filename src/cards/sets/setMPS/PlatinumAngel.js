"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PlatinumAngel extends UnimplementedCard {
  constructor (game) {
    super(game, "Platinum Angel", "Kaladesh Inventions", "MPS");
  }
}

module.exports = PlatinumAngel;

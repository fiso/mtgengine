"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MagmaSpray extends UnimplementedCard {
  constructor (game) {
    super(game, "Magma Spray", "Amonkhet", "AKH");
  }
}

module.exports = MagmaSpray;

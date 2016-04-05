"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PeatBog extends UnimplementedCard {
  constructor(game) {
    super(game, "Peat Bog", "Mercadian Masques", "MMQ");
  }
}

module.exports = PeatBog;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FountainofCho extends UnimplementedCard {
  constructor(game) {
    super(game, "Fountain of Cho", "Mercadian Masques", "MMQ");
  }
}

module.exports = FountainofCho;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Extortion extends UnimplementedCard {
  constructor(game) {
    super(game, "Extortion", "Mercadian Masques", "MMQ");
  }
}

module.exports = Extortion;

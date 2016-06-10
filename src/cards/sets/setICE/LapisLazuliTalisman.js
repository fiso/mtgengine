"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LapisLazuliTalisman extends UnimplementedCard {
  constructor (game) {
    super(game, "Lapis Lazuli Talisman", "Ice Age", "ICE");
  }
}

module.exports = LapisLazuliTalisman;

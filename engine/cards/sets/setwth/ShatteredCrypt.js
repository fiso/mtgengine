"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShatteredCrypt extends UnimplementedCard {
  constructor(game) {
    super(game, "Shattered Crypt", "Weatherlight", "WTH");
  }
}

module.exports = ShatteredCrypt;

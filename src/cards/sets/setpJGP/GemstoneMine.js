"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GemstoneMine extends UnimplementedCard {
  constructor (game) {
    super(game, "Gemstone Mine", "Judge Gift Program", "pJGP");
  }
}

module.exports = GemstoneMine;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Stifle extends UnimplementedCard {
  constructor(game) {
    super(game, "Stifle", "Judge Gift Program", "pJGP");
  }
}

module.exports = Stifle;

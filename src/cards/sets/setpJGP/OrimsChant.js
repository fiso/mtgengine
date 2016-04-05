"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OrimsChant extends UnimplementedCard {
  constructor(game) {
    super(game, "Orim's Chant", "Judge Gift Program", "pJGP");
  }
}

module.exports = OrimsChant;

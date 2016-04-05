"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhyrexianDreadnought extends UnimplementedCard {
  constructor(game) {
    super(game, "Phyrexian Dreadnought", "Judge Gift Program", "pJGP");
  }
}

module.exports = PhyrexianDreadnought;

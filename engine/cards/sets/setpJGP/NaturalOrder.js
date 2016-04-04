"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NaturalOrder extends Card {
  constructor(game) {
    super(game, "Natural Order", "Judge Gift Program", "pJGP");
  }
}

module.exports = NaturalOrder;

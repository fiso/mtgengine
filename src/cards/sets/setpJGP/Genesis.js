"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Genesis extends UnimplementedCard {
  constructor(game) {
    super(game, "Genesis", "Judge Gift Program", "pJGP");
  }
}

module.exports = Genesis;

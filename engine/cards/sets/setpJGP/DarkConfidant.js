"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DarkConfidant extends UnimplementedCard {
  constructor(game) {
    super(game, "Dark Confidant", "Judge Gift Program", "pJGP");
  }
}

module.exports = DarkConfidant;

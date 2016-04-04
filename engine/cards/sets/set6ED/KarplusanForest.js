"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KarplusanForest extends UnimplementedCard {
  constructor(game) {
    super(game, "Karplusan Forest", "Classic Sixth Edition", "6ED");
  }
}

module.exports = KarplusanForest;

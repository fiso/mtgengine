"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrimLavamancer extends UnimplementedCard {
  constructor(game) {
    super(game, "Grim Lavamancer", "Judge Gift Program", "pJGP");
  }
}

module.exports = GrimLavamancer;

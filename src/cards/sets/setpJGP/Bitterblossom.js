"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Bitterblossom extends UnimplementedCard {
  constructor (game) {
    super(game, "Bitterblossom", "Judge Gift Program", "pJGP");
  }
}

module.exports = Bitterblossom;

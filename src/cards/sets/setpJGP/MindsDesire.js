"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MindsDesire extends UnimplementedCard {
  constructor (game) {
    super(game, "Mind's Desire", "Judge Gift Program", "pJGP");
  }
}

module.exports = MindsDesire;

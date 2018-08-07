"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Bribery extends UnimplementedCard {
  constructor (game) {
    super(game, "Bribery", "Judge Gift Cards 2013", "J13");
  }
}

module.exports = Bribery;

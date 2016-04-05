"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HedronScrabbler extends UnimplementedCard {
  constructor(game) {
    super(game, "Hedron Scrabbler", "Zendikar", "ZEN");
  }
}

module.exports = HedronScrabbler;

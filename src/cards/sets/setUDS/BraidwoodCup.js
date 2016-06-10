"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BraidwoodCup extends UnimplementedCard {
  constructor (game) {
    super(game, "Braidwood Cup", "Urza's Destiny", "UDS");
  }
}

module.exports = BraidwoodCup;

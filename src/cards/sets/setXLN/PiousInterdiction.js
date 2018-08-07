"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PiousInterdiction extends UnimplementedCard {
  constructor (game) {
    super(game, "Pious Interdiction", "Ixalan", "XLN");
  }
}

module.exports = PiousInterdiction;

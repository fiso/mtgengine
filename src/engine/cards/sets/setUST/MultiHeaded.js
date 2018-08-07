"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MultiHeaded extends UnimplementedCard {
  constructor (game) {
    super(game, "Multi-Headed", "Unstable", "UST");
  }
}

module.exports = MultiHeaded;

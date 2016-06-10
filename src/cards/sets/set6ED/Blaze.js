"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Blaze extends UnimplementedCard {
  constructor (game) {
    super(game, "Blaze", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Blaze;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Burrowing extends UnimplementedCard {
  constructor (game) {
    super(game, "Burrowing", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Burrowing;

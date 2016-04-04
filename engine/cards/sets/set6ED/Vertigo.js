"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Vertigo extends UnimplementedCard {
  constructor(game) {
    super(game, "Vertigo", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Vertigo;

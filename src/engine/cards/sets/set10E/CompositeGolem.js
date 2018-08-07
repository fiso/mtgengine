"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CompositeGolem extends UnimplementedCard {
  constructor (game) {
    super(game, "Composite Golem", "Tenth Edition", "10E");
  }
}

module.exports = CompositeGolem;

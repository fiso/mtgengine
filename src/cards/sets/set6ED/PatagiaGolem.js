"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PatagiaGolem extends UnimplementedCard {
  constructor (game) {
    super(game, "Patagia Golem", "Classic Sixth Edition", "6ED");
  }
}

module.exports = PatagiaGolem;

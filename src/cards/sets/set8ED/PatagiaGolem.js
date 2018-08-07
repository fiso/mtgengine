"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PatagiaGolem extends UnimplementedCard {
  constructor (game) {
    super(game, "Patagia Golem", "Eighth Edition", "8ED");
  }
}

module.exports = PatagiaGolem;

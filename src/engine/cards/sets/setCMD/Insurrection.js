"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Insurrection extends UnimplementedCard {
  constructor (game) {
    super(game, "Insurrection", "Commander 2011", "CMD");
  }
}

module.exports = Insurrection;

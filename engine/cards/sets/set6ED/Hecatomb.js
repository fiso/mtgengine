"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Hecatomb extends UnimplementedCard {
  constructor(game) {
    super(game, "Hecatomb", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Hecatomb;

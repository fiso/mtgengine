"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Nevermaker extends UnimplementedCard {
  constructor (game) {
    super(game, "Nevermaker", "Morningtide", "MOR");
  }
}

module.exports = Nevermaker;

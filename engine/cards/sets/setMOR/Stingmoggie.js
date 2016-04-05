"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Stingmoggie extends UnimplementedCard {
  constructor(game) {
    super(game, "Stingmoggie", "Morningtide", "MOR");
  }
}

module.exports = Stingmoggie;

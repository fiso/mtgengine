"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MorselTheft extends UnimplementedCard {
  constructor (game) {
    super(game, "Morsel Theft", "Morningtide", "MOR");
  }
}

module.exports = MorselTheft;

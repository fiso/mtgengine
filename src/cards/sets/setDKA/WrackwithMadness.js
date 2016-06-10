"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WrackwithMadness extends UnimplementedCard {
  constructor (game) {
    super(game, "Wrack with Madness", "Dark Ascension", "DKA");
  }
}

module.exports = WrackwithMadness;

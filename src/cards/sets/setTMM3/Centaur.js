"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Centaur extends UnimplementedCard {
  constructor (game) {
    super(game, "Centaur", "Modern Masters 2017 Tokens", "TMM3");
  }
}

module.exports = Centaur;

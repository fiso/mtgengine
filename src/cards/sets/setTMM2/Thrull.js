"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Thrull extends UnimplementedCard {
  constructor (game) {
    super(game, "Thrull", "Modern Masters 2015 Tokens", "TMM2");
  }
}

module.exports = Thrull;

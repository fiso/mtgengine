"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Abduction extends UnimplementedCard {
  constructor(game) {
    super(game, "Abduction", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Abduction;

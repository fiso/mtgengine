"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Ostracize extends UnimplementedCard {
  constructor(game) {
    super(game, "Ostracize", "Seventh Edition", "7ED");
  }
}

module.exports = Ostracize;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Impatience extends UnimplementedCard {
  constructor(game) {
    super(game, "Impatience", "Seventh Edition", "7ED");
  }
}

module.exports = Impatience;

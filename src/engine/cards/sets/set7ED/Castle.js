"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Castle extends UnimplementedCard {
  constructor (game) {
    super(game, "Castle", "Seventh Edition", "7ED");
  }
}

module.exports = Castle;

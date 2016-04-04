"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Castle extends UnimplementedCard {
  constructor(game) {
    super(game, "Castle", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Castle;

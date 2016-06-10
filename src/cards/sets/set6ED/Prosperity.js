"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Prosperity extends UnimplementedCard {
  constructor (game) {
    super(game, "Prosperity", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Prosperity;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Remedy extends UnimplementedCard {
  constructor (game) {
    super(game, "Remedy", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Remedy;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Earthquake extends UnimplementedCard {
  constructor(game) {
    super(game, "Earthquake", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Earthquake;

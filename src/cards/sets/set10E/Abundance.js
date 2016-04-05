"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Abundance extends UnimplementedCard {
  constructor(game) {
    super(game, "Abundance", "Tenth Edition", "10E");
  }
}

module.exports = Abundance;

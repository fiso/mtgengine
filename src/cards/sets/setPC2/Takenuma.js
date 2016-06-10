"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Takenuma extends UnimplementedCard {
  constructor (game) {
    super(game, "Takenuma", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = Takenuma;

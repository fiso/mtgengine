"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Boil extends UnimplementedCard {
  constructor (game) {
    super(game, "Boil", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Boil;

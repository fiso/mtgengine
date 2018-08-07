"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Fortify extends UnimplementedCard {
  constructor (game) {
    super(game, "Fortify", "Modern Masters 2015", "MM2");
  }
}

module.exports = Fortify;

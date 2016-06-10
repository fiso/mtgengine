"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoldShambler extends UnimplementedCard {
  constructor (game) {
    super(game, "Mold Shambler", "Commander 2013 Edition", "C13");
  }
}

module.exports = MoldShambler;

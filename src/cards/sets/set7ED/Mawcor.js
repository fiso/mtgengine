"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Mawcor extends UnimplementedCard {
  constructor (game) {
    super(game, "Mawcor", "Seventh Edition", "7ED");
  }
}

module.exports = Mawcor;

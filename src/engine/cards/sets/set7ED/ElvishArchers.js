"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElvishArchers extends UnimplementedCard {
  constructor (game) {
    super(game, "Elvish Archers", "Seventh Edition", "7ED");
  }
}

module.exports = ElvishArchers;

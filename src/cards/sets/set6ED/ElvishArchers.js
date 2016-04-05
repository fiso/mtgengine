"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElvishArchers extends UnimplementedCard {
  constructor(game) {
    super(game, "Elvish Archers", "Classic Sixth Edition", "6ED");
  }
}

module.exports = ElvishArchers;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DrinkerofSorrow extends UnimplementedCard {
  constructor(game) {
    super(game, "Drinker of Sorrow", "Legions", "LGN");
  }
}

module.exports = DrinkerofSorrow;

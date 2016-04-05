"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HornedTroll extends UnimplementedCard {
  constructor(game) {
    super(game, "Horned Troll", "Eighth Edition", "8ED");
  }
}

module.exports = HornedTroll;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Overgrowth extends UnimplementedCard {
  constructor(game) {
    super(game, "Overgrowth", "Ninth Edition", "9ED");
  }
}

module.exports = Overgrowth;

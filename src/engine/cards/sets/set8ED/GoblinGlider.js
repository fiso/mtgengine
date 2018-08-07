"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinGlider extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Glider", "Eighth Edition", "8ED");
  }
}

module.exports = GoblinGlider;

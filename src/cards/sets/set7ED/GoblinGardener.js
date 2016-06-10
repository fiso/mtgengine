"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinGardener extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Gardener", "Seventh Edition", "7ED");
  }
}

module.exports = GoblinGardener;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinTrenches extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Trenches", "Apocalypse", "APC");
  }
}

module.exports = GoblinTrenches;

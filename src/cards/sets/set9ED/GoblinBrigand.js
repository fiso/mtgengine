"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinBrigand extends UnimplementedCard {
  constructor(game) {
    super(game, "Goblin Brigand", "Ninth Edition", "9ED");
  }
}

module.exports = GoblinBrigand;

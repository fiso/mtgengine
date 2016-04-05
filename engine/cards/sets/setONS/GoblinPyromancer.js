"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinPyromancer extends UnimplementedCard {
  constructor(game) {
    super(game, "Goblin Pyromancer", "Onslaught", "ONS");
  }
}

module.exports = GoblinPyromancer;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinTinkerer extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Tinkerer", "Anthologies", "ATH");
  }
}

module.exports = GoblinTinkerer;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinOffensive extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Offensive", "Anthologies", "ATH");
  }
}

module.exports = GoblinOffensive;

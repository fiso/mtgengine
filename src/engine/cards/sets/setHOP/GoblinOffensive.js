"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinOffensive extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Offensive", "Planechase", "HOP");
  }
}

module.exports = GoblinOffensive;

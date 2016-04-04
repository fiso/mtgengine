"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinMatron extends UnimplementedCard {
  constructor(game) {
    super(game, "Goblin Matron", "Anthologies", "ATH");
  }
}

module.exports = GoblinMatron;

"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinWarrens extends UnimplementedCard {
  constructor(game) {
    super(game, "Goblin Warrens", "Anthologies", "ATH");
  }
}

module.exports = GoblinWarrens;

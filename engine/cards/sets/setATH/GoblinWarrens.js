"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinWarrens extends Card {
  constructor(game) {
    super(game, "Goblin Warrens", "Anthologies", "ATH");
  }
}

module.exports = GoblinWarrens;

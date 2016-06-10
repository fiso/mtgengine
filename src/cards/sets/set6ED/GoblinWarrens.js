"use strict";
const Constants = require ("../../../Constants");
const GoblinWarrensBase = require("../setATH/GoblinWarrens");

class GoblinWarrens extends GoblinWarrensBase {
  constructor (game) {
    super(game, "Goblin Warrens", "Classic Sixth Edition", "6ED");
  }
}

module.exports = GoblinWarrens;

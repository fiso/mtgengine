"use strict";
const Constants = require ("../../../Constants");
const GoblinWarrensBase = require("../setME4/GoblinWarrens");

class GoblinWarrens extends GoblinWarrensBase {
  constructor (game) {
    super(game, "Goblin Warrens", "Classic Sixth Edition", "6ED");
  }
}

module.exports = GoblinWarrens;

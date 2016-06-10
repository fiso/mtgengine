"use strict";
const Constants = require ("../../../Constants");
const GoblinWarrensBase = require("../setATH/GoblinWarrens");

class GoblinWarrens extends GoblinWarrensBase {
  constructor (game) {
    super(game, "Goblin Warrens", "Fifth Edition", "5ED");
  }
}

module.exports = GoblinWarrens;

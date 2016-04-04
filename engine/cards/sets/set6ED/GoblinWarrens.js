"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoblinWarrensBase = require("../setATH/GoblinWarrens.js");

class GoblinWarrens extends GoblinWarrensBase {
  constructor(game) {
    super(game, "Goblin Warrens", "Classic Sixth Edition", "6ED");
  }
}

module.exports = GoblinWarrens;

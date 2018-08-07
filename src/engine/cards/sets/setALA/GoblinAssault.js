"use strict";
const Constants = require ("../../../Constants");
const GoblinAssaultBase = require("../setMM3/GoblinAssault");

class GoblinAssault extends GoblinAssaultBase {
  constructor (game) {
    super(game, "Goblin Assault", "Shards of Alara", "ALA");
  }
}

module.exports = GoblinAssault;

"use strict";
const Constants = require ("../../../Constants");
const CommandTowerBase = require("../setC18/CommandTower");

class CommandTower extends CommandTowerBase {
  constructor (game) {
    super(game, "Command Tower", "Magic Online Promos", "PRM");
  }
}

module.exports = CommandTower;

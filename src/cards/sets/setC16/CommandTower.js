"use strict";
const Constants = require ("../../../Constants");
const CommandTowerBase = require("../setC18/CommandTower");

class CommandTower extends CommandTowerBase {
  constructor (game) {
    super(game, "Command Tower", "Commander 2016", "C16");
  }
}

module.exports = CommandTower;

"use strict";
const Constants = require ("../../../Constants");
const CommandTowerBase = require("../setC13/CommandTower");

class CommandTower extends CommandTowerBase {
  constructor(game) {
    super(game, "Command Tower", "Commander 2015", "C15");
  }
}

module.exports = CommandTower;

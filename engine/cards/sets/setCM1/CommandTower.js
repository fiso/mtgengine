"use strict";
const Constants = require ("../../../Constants");
const CommandTowerBase = require("../setC13/CommandTower");

class CommandTower extends CommandTowerBase {
  constructor(game) {
    super(game, "Command Tower", "Commander's Arsenal", "CM1");
  }
}

module.exports = CommandTower;

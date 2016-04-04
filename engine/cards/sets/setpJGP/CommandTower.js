"use strict";
const Constants = require ("../../../Constants");
const CommandTowerBase = require("../setC13/CommandTower");

class CommandTower extends CommandTowerBase {
  constructor(game) {
    super(game, "Command Tower", "Judge Gift Program", "pJGP");
  }
}

module.exports = CommandTower;

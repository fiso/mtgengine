"use strict";
const Constants = require ("../../../Constants");
const CommandTowerBase = require("../setC18/CommandTower");

class CommandTower extends CommandTowerBase {
  constructor (game) {
    super(game, "Command Tower", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = CommandTower;

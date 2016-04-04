"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CommandTowerBase = require("../setC13/CommandTower.js");

class CommandTower extends CommandTowerBase {
  constructor(game) {
    super(game, "Command Tower", "Commander 2015", "C15");
  }
}

module.exports = CommandTower;

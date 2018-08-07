"use strict";
const Constants = require ("../../../Constants");
const CommandersSphereBase = require("../setC18/CommandersSphere");

class CommandersSphere extends CommandersSphereBase {
  constructor (game) {
    super(game, "Commander's Sphere", "Commander 2016", "C16");
  }
}

module.exports = CommandersSphere;

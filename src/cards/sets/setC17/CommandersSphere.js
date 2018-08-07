"use strict";
const Constants = require ("../../../Constants");
const CommandersSphereBase = require("../setC18/CommandersSphere");

class CommandersSphere extends CommandersSphereBase {
  constructor (game) {
    super(game, "Commander's Sphere", "Commander 2017", "C17");
  }
}

module.exports = CommandersSphere;

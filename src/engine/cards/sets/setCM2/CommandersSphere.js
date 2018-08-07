"use strict";
const Constants = require ("../../../Constants");
const CommandersSphereBase = require("../setC18/CommandersSphere");

class CommandersSphere extends CommandersSphereBase {
  constructor (game) {
    super(game, "Commander's Sphere", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = CommandersSphere;

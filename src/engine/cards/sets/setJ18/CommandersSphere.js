"use strict";
const Constants = require ("../../../Constants");
const CommandersSphereBase = require("../setC18/CommandersSphere");

class CommandersSphere extends CommandersSphereBase {
  constructor (game) {
    super(game, "Commander's Sphere", "Judge Gift Cards 2018", "J18");
  }
}

module.exports = CommandersSphere;

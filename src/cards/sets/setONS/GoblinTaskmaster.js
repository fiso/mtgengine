"use strict";
const Constants = require ("../../../Constants");
const GoblinTaskmasterBase = require("../setWC03/GoblinTaskmaster");

class GoblinTaskmaster extends GoblinTaskmasterBase {
  constructor (game) {
    super(game, "Goblin Taskmaster", "Onslaught", "ONS");
  }
}

module.exports = GoblinTaskmaster;

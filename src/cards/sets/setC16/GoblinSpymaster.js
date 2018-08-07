"use strict";
const Constants = require ("../../../Constants");
const GoblinSpymasterBase = require("../setPZ2/GoblinSpymaster");

class GoblinSpymaster extends GoblinSpymasterBase {
  constructor (game) {
    super(game, "Goblin Spymaster", "Commander 2016", "C16");
  }
}

module.exports = GoblinSpymaster;

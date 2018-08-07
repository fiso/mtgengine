"use strict";
const Constants = require ("../../../Constants");
const GoblinBase = require("../setMTGA/Goblin");

class Goblin extends GoblinBase {
  constructor (game) {
    super(game, "Goblin", "Commander Anthology Volume II Tokens", "TCM2");
  }
}

module.exports = Goblin;

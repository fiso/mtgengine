"use strict";
const Constants = require ("../../../Constants");
const GoblinBase = require("../setMTGA/Goblin");

class Goblin extends GoblinBase {
  constructor (game) {
    super(game, "Goblin", "Magic 2010 Tokens", "TM10");
  }
}

module.exports = Goblin;

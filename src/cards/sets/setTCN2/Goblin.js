"use strict";
const Constants = require ("../../../Constants");
const GoblinBase = require("../setMTGA/Goblin");

class Goblin extends GoblinBase {
  constructor (game) {
    super(game, "Goblin", "Conspiracy: Take the Crown Tokens", "TCN2");
  }
}

module.exports = Goblin;

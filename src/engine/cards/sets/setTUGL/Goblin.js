"use strict";
const Constants = require ("../../../Constants");
const GoblinBase = require("../setMTGA/Goblin");

class Goblin extends GoblinBase {
  constructor (game) {
    super(game, "Goblin", "Unglued Tokens", "TUGL");
  }
}

module.exports = Goblin;

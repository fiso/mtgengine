"use strict";
const Constants = require ("../../../Constants");
const GoblinBase = require("../setMTGA/Goblin");

class Goblin extends GoblinBase {
  constructor (game) {
    super(game, "Goblin", "Dragons of Tarkir Tokens", "TDTK");
  }
}

module.exports = Goblin;

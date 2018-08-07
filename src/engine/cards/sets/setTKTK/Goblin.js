"use strict";
const Constants = require ("../../../Constants");
const GoblinBase = require("../setMTGA/Goblin");

class Goblin extends GoblinBase {
  constructor (game) {
    super(game, "Goblin", "Khans of Tarkir Tokens", "TKTK");
  }
}

module.exports = Goblin;

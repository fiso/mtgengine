"use strict";
const Constants = require ("../../../Constants");
const GoblinBase = require("../setMTGA/Goblin");

class Goblin extends GoblinBase {
  constructor (game) {
    super(game, "Goblin", "Modern Masters 2017 Tokens", "TMM3");
  }
}

module.exports = Goblin;

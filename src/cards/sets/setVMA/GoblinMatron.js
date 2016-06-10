"use strict";
const Constants = require ("../../../Constants");
const GoblinMatronBase = require("../setATH/GoblinMatron");

class GoblinMatron extends GoblinMatronBase {
  constructor (game) {
    super(game, "Goblin Matron", "Vintage Masters", "VMA");
  }
}

module.exports = GoblinMatron;

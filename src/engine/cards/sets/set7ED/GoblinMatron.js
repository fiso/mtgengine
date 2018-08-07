"use strict";
const Constants = require ("../../../Constants");
const GoblinMatronBase = require("../setEVG/GoblinMatron");

class GoblinMatron extends GoblinMatronBase {
  constructor (game) {
    super(game, "Goblin Matron", "Seventh Edition", "7ED");
  }
}

module.exports = GoblinMatron;

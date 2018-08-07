"use strict";
const Constants = require ("../../../Constants");
const GoblinCharbelcherBase = require("../setDDT/GoblinCharbelcher");

class GoblinCharbelcher extends GoblinCharbelcherBase {
  constructor (game) {
    super(game, "Goblin Charbelcher", "Eternal Masters", "EMA");
  }
}

module.exports = GoblinCharbelcher;

"use strict";
const Constants = require ("../../../Constants");
const GoblinSettlerBase = require("../setVMA/GoblinSettler");

class GoblinSettler extends GoblinSettlerBase {
  constructor (game) {
    super(game, "Goblin Settler", "Starter 1999", "S99");
  }
}

module.exports = GoblinSettler;

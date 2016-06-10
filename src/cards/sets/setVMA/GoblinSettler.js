"use strict";
const Constants = require ("../../../Constants");
const GoblinSettlerBase = require("../setS99/GoblinSettler");

class GoblinSettler extends GoblinSettlerBase {
  constructor (game) {
    super(game, "Goblin Settler", "Vintage Masters", "VMA");
  }
}

module.exports = GoblinSettler;

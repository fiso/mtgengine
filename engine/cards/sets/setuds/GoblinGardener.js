"use strict";
const Constants = require ("../../../Constants");
const GoblinGardenerBase = require("../set7ED/GoblinGardener");

class GoblinGardener extends GoblinGardenerBase {
  constructor(game) {
    super(game, "Goblin Gardener", "Urza's Destiny", "UDS");
  }
}

module.exports = GoblinGardener;

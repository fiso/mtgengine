"use strict";
const Constants = require ("../../../Constants");
const GoblinRingleaderBase = require("../setAPC/GoblinRingleader");

class GoblinRingleader extends GoblinRingleaderBase {
  constructor(game) {
    super(game, "Goblin Ringleader", "Vintage Masters", "VMA");
  }
}

module.exports = GoblinRingleader;

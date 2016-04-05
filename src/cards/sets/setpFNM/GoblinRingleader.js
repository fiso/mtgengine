"use strict";
const Constants = require ("../../../Constants");
const GoblinRingleaderBase = require("../setAPC/GoblinRingleader");

class GoblinRingleader extends GoblinRingleaderBase {
  constructor(game) {
    super(game, "Goblin Ringleader", "Friday Night Magic", "pFNM");
  }
}

module.exports = GoblinRingleader;

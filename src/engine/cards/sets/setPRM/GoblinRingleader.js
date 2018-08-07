"use strict";
const Constants = require ("../../../Constants");
const GoblinRingleaderBase = require("../setDDT/GoblinRingleader");

class GoblinRingleader extends GoblinRingleaderBase {
  constructor (game) {
    super(game, "Goblin Ringleader", "Magic Online Promos", "PRM");
  }
}

module.exports = GoblinRingleader;

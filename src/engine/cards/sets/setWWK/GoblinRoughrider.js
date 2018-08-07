"use strict";
const Constants = require ("../../../Constants");
const GoblinRoughriderBase = require("../setM15/GoblinRoughrider");

class GoblinRoughrider extends GoblinRoughriderBase {
  constructor (game) {
    super(game, "Goblin Roughrider", "Worldwake", "WWK");
  }
}

module.exports = GoblinRoughrider;

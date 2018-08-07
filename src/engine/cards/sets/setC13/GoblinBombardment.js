"use strict";
const Constants = require ("../../../Constants");
const GoblinBombardmentBase = require("../setTPR/GoblinBombardment");

class GoblinBombardment extends GoblinBombardmentBase {
  constructor (game) {
    super(game, "Goblin Bombardment", "Commander 2013", "C13");
  }
}

module.exports = GoblinBombardment;

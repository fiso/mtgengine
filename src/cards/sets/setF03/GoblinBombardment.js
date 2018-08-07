"use strict";
const Constants = require ("../../../Constants");
const GoblinBombardmentBase = require("../setTPR/GoblinBombardment");

class GoblinBombardment extends GoblinBombardmentBase {
  constructor (game) {
    super(game, "Goblin Bombardment", "Friday Night Magic 2003", "F03");
  }
}

module.exports = GoblinBombardment;

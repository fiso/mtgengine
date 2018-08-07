"use strict";
const Constants = require ("../../../Constants");
const GoblinBombardmentBase = require("../setTPR/GoblinBombardment");

class GoblinBombardment extends GoblinBombardmentBase {
  constructor (game) {
    super(game, "Goblin Bombardment", "Magic Online Promos", "PRM");
  }
}

module.exports = GoblinBombardment;

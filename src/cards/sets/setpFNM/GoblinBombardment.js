"use strict";
const Constants = require ("../../../Constants");
const GoblinBombardmentBase = require("../setC13/GoblinBombardment");

class GoblinBombardment extends GoblinBombardmentBase {
  constructor (game) {
    super(game, "Goblin Bombardment", "Friday Night Magic", "pFNM");
  }
}

module.exports = GoblinBombardment;

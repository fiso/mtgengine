"use strict";
const Constants = require ("../../../Constants");
const GoblinFirestarterBase = require("../setME4/GoblinFirestarter");

class GoblinFirestarter extends GoblinFirestarterBase {
  constructor (game) {
    super(game, "Goblin Firestarter", "Portal Second Age", "PO2");
  }
}

module.exports = GoblinFirestarter;

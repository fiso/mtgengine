"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoblinFirestarterBase = require("../setME4/GoblinFirestarter.js");

class GoblinFirestarter extends GoblinFirestarterBase {
  constructor(game) {
    super(game, "Goblin Firestarter", "Portal Second Age", "PO2");
  }
}

module.exports = GoblinFirestarter;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoblinDiplomatsBase = require("../setM14/GoblinDiplomats.js");

class GoblinDiplomats extends GoblinDiplomatsBase {
  constructor(game) {
    super(game, "Goblin Diplomats", "Magic Game Day", "pMGD");
  }
}

module.exports = GoblinDiplomats;

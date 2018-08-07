"use strict";
const Constants = require ("../../../Constants");
const OakgnarlWarriorBase = require("../setDDR/OakgnarlWarrior");

class OakgnarlWarrior extends OakgnarlWarriorBase {
  constructor (game) {
    super(game, "Oakgnarl Warrior", "Lorwyn", "LRW");
  }
}

module.exports = OakgnarlWarrior;

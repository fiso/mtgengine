"use strict";
const Constants = require ("../../../Constants");
const GoblinCavaliersBase = require("../setME4/GoblinCavaliers");

class GoblinCavaliers extends GoblinCavaliersBase {
  constructor (game) {
    super(game, "Goblin Cavaliers", "Portal Second Age", "PO2");
  }
}

module.exports = GoblinCavaliers;

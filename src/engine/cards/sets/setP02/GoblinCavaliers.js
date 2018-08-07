"use strict";
const Constants = require ("../../../Constants");
const GoblinCavaliersBase = require("../setME4/GoblinCavaliers");

class GoblinCavaliers extends GoblinCavaliersBase {
  constructor (game) {
    super(game, "Goblin Cavaliers", "Portal Second Age", "P02");
  }
}

module.exports = GoblinCavaliers;

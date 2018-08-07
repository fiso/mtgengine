"use strict";
const Constants = require ("../../../Constants");
const GoblinRabblemasterBase = require("../setDDT/GoblinRabblemaster");

class GoblinRabblemaster extends GoblinRabblemasterBase {
  constructor (game) {
    super(game, "Goblin Rabblemaster", "Magic 2015", "M15");
  }
}

module.exports = GoblinRabblemaster;

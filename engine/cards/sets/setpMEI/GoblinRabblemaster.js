"use strict";
const Constants = require ("../../../Constants");
const GoblinRabblemasterBase = require("../setM15/GoblinRabblemaster");

class GoblinRabblemaster extends GoblinRabblemasterBase {
  constructor(game) {
    super(game, "Goblin Rabblemaster", "Media Inserts", "pMEI");
  }
}

module.exports = GoblinRabblemaster;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoblinRabblemasterBase = require("../setM15/GoblinRabblemaster.js");

class GoblinRabblemaster extends GoblinRabblemasterBase {
  constructor(game) {
    super(game, "Goblin Rabblemaster", "Media Inserts", "pMEI");
  }
}

module.exports = GoblinRabblemaster;

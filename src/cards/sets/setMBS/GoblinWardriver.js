"use strict";
const Constants = require ("../../../Constants");
const GoblinWardriverBase = require("../setDDT/GoblinWardriver");

class GoblinWardriver extends GoblinWardriverBase {
  constructor (game) {
    super(game, "Goblin Wardriver", "Mirrodin Besieged", "MBS");
  }
}

module.exports = GoblinWardriver;

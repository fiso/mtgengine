"use strict";
const Constants = require ("../../../Constants");
const TreasureMageBase = require("../setpMGD/TreasureMage");

class TreasureMage extends TreasureMageBase {
  constructor(game) {
    super(game, "Treasure Mage", "Mirrodin Besieged", "MBS");
  }
}

module.exports = TreasureMage;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TreasureMageBase = require("../setpMGD/TreasureMage.js");

class TreasureMage extends TreasureMageBase {
  constructor(game) {
    super(game, "Treasure Mage", "Mirrodin Besieged", "MBS");
  }
}

module.exports = TreasureMage;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KoboldOverlordBase = require("../setLEG/KoboldOverlord.js");

class KoboldOverlord extends KoboldOverlordBase {
  constructor(game) {
    super(game, "Kobold Overlord", "Masters Edition III", "ME3");
  }
}

module.exports = KoboldOverlord;

"use strict";
const Constants = require ("../../../Constants");
const KoboldOverlordBase = require("../setLEG/KoboldOverlord");

class KoboldOverlord extends KoboldOverlordBase {
  constructor (game) {
    super(game, "Kobold Overlord", "Masters Edition III", "ME3");
  }
}

module.exports = KoboldOverlord;

"use strict";
const Constants = require ("../../../Constants");
const KoboldOverlordBase = require("../setME3/KoboldOverlord");

class KoboldOverlord extends KoboldOverlordBase {
  constructor (game) {
    super(game, "Kobold Overlord", "Legends", "LEG");
  }
}

module.exports = KoboldOverlord;

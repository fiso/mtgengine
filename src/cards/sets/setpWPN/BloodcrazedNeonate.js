"use strict";
const Constants = require ("../../../Constants");
const BloodcrazedNeonateBase = require("../setISD/BloodcrazedNeonate");

class BloodcrazedNeonate extends BloodcrazedNeonateBase {
  constructor (game) {
    super(game, "Bloodcrazed Neonate", "WPN and Gateway", "pWPN");
  }
}

module.exports = BloodcrazedNeonate;

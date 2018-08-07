"use strict";
const Constants = require ("../../../Constants");
const BloodcrazedNeonateBase = require("../setISD/BloodcrazedNeonate");

class BloodcrazedNeonate extends BloodcrazedNeonateBase {
  constructor (game) {
    super(game, "Bloodcrazed Neonate", "Magic Online Promos", "PRM");
  }
}

module.exports = BloodcrazedNeonate;

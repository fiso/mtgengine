"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BloodcrazedNeonateBase = require("../setISD/BloodcrazedNeonate.js");

class BloodcrazedNeonate extends BloodcrazedNeonateBase {
  constructor(game) {
    super(game, "Bloodcrazed Neonate", "WPN and Gateway", "pWPN");
  }
}

module.exports = BloodcrazedNeonate;

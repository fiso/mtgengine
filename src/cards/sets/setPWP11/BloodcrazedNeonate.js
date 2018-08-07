"use strict";
const Constants = require ("../../../Constants");
const BloodcrazedNeonateBase = require("../setISD/BloodcrazedNeonate");

class BloodcrazedNeonate extends BloodcrazedNeonateBase {
  constructor (game) {
    super(game, "Bloodcrazed Neonate", "Wizards Play Network 2011", "PWP11");
  }
}

module.exports = BloodcrazedNeonate;

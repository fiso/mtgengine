"use strict";
const Constants = require ("../../../Constants");
const BloodTyrantBase = require("../setE01/BloodTyrant");

class BloodTyrant extends BloodTyrantBase {
  constructor (game) {
    super(game, "Blood Tyrant", "Conflux", "CON");
  }
}

module.exports = BloodTyrant;

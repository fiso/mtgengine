"use strict";
const Constants = require ("../../../Constants");
const VitalSplicerBase = require("../setMM3/VitalSplicer");

class VitalSplicer extends VitalSplicerBase {
  constructor (game) {
    super(game, "Vital Splicer", "New Phyrexia", "NPH");
  }
}

module.exports = VitalSplicer;

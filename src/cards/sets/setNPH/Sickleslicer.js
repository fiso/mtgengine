"use strict";
const Constants = require ("../../../Constants");
const SickleslicerBase = require("../setMM2/Sickleslicer");

class Sickleslicer extends SickleslicerBase {
  constructor(game) {
    super(game, "Sickleslicer", "New Phyrexia", "NPH");
  }
}

module.exports = Sickleslicer;

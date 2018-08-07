"use strict";
const Constants = require ("../../../Constants");
const VesselofEndlessRestBase = require("../setC18/VesselofEndlessRest");

class VesselofEndlessRest extends VesselofEndlessRestBase {
  constructor (game) {
    super(game, "Vessel of Endless Rest", "Avacyn Restored", "AVR");
  }
}

module.exports = VesselofEndlessRest;

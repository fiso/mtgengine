"use strict";
const Constants = require ("../../../Constants");
const VesselofNascencyBase = require("../setA25/VesselofNascency");

class VesselofNascency extends VesselofNascencyBase {
  constructor (game) {
    super(game, "Vessel of Nascency", "Shadows over Innistrad", "SOI");
  }
}

module.exports = VesselofNascency;

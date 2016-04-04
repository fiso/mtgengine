"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CourtStreetDenizenBase = require("../setDDO/CourtStreetDenizen.js");

class CourtStreetDenizen extends CourtStreetDenizenBase {
  constructor(game) {
    super(game, "Court Street Denizen", "Gatecrash", "GTC");
  }
}

module.exports = CourtStreetDenizen;

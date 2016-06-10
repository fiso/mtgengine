"use strict";
const Constants = require ("../../../Constants");
const CourtStreetDenizenBase = require("../setDDO/CourtStreetDenizen");

class CourtStreetDenizen extends CourtStreetDenizenBase {
  constructor (game) {
    super(game, "Court Street Denizen", "Gatecrash", "GTC");
  }
}

module.exports = CourtStreetDenizen;

"use strict";
const Constants = require ("../../../Constants");
const GhituEncampmentBase = require("../setDDN/GhituEncampment");

class GhituEncampment extends GhituEncampmentBase {
  constructor (game) {
    super(game, "Ghitu Encampment", "Premium Deck Series: Fire and Lightning", "PD2");
  }
}

module.exports = GhituEncampment;

"use strict";
const Constants = require ("../../../Constants");
const SpringjackPastureBase = require("../setC13/SpringjackPasture");

class SpringjackPasture extends SpringjackPastureBase {
  constructor (game) {
    super(game, "Springjack Pasture", "Eventide", "EVE");
  }
}

module.exports = SpringjackPasture;

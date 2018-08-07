"use strict";
const Constants = require ("../../../Constants");
const SafeHavenBase = require("../setTSB/SafeHaven");

class SafeHaven extends SafeHavenBase {
  constructor (game) {
    super(game, "Safe Haven", "Pro Tour Collector Set", "PTC");
  }
}

module.exports = SafeHaven;

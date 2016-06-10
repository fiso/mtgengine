"use strict";
const Constants = require ("../../../Constants");
const FireCovenantBase = require("../setICE/FireCovenant");

class FireCovenant extends FireCovenantBase {
  constructor (game) {
    super(game, "Fire Covenant", "Masters Edition", "MED");
  }
}

module.exports = FireCovenant;

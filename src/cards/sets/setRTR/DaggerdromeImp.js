"use strict";
const Constants = require ("../../../Constants");
const DaggerdromeImpBase = require("../setBBD/DaggerdromeImp");

class DaggerdromeImp extends DaggerdromeImpBase {
  constructor (game) {
    super(game, "Daggerdrome Imp", "Return to Ravnica", "RTR");
  }
}

module.exports = DaggerdromeImp;

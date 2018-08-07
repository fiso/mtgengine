"use strict";
const Constants = require ("../../../Constants");
const BonfireoftheDamnedBase = require("../setMM3/BonfireoftheDamned");

class BonfireoftheDamned extends BonfireoftheDamnedBase {
  constructor (game) {
    super(game, "Bonfire of the Damned", "Avacyn Restored", "AVR");
  }
}

module.exports = BonfireoftheDamned;

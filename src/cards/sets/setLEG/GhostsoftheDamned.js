"use strict";
const Constants = require ("../../../Constants");
const GhostsoftheDamnedBase = require("../setME3/GhostsoftheDamned");

class GhostsoftheDamned extends GhostsoftheDamnedBase {
  constructor (game) {
    super(game, "Ghosts of the Damned", "Legends", "LEG");
  }
}

module.exports = GhostsoftheDamned;

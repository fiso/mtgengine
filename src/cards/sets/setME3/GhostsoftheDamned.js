"use strict";
const Constants = require ("../../../Constants");
const GhostsoftheDamnedBase = require("../setLEG/GhostsoftheDamned");

class GhostsoftheDamned extends GhostsoftheDamnedBase {
  constructor (game) {
    super(game, "Ghosts of the Damned", "Masters Edition III", "ME3");
  }
}

module.exports = GhostsoftheDamned;

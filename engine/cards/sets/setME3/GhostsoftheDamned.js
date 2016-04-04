"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GhostsoftheDamnedBase = require("../setLEG/GhostsoftheDamned.js");

class GhostsoftheDamned extends GhostsoftheDamnedBase {
  constructor(game) {
    super(game, "Ghosts of the Damned", "Masters Edition III", "ME3");
  }
}

module.exports = GhostsoftheDamned;

"use strict";
const Constants = require ("../../../Constants");
const BontusLastReckoningBase = require("../setHOU/BontusLastReckoning");

class BontusLastReckoning extends BontusLastReckoningBase {
  constructor (game) {
    super(game, "Bontu's Last Reckoning", "Hour of Devastation Promos", "PHOU");
  }
}

module.exports = BontusLastReckoning;

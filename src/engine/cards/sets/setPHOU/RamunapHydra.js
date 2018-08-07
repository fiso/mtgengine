"use strict";
const Constants = require ("../../../Constants");
const RamunapHydraBase = require("../setHOU/RamunapHydra");

class RamunapHydra extends RamunapHydraBase {
  constructor (game) {
    super(game, "Ramunap Hydra", "Hour of Devastation Promos", "PHOU");
  }
}

module.exports = RamunapHydra;

"use strict";
const Constants = require ("../../../Constants");
const AetherfluxReservoirBase = require("../setKLD/AetherfluxReservoir");

class AetherfluxReservoir extends AetherfluxReservoirBase {
  constructor (game) {
    super(game, "Aetherflux Reservoir", "Kaladesh Promos", "PKLD");
  }
}

module.exports = AetherfluxReservoir;

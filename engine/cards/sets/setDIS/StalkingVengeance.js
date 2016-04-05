"use strict";
const Constants = require ("../../../Constants");
const StalkingVengeanceBase = require("../setC13/StalkingVengeance");

class StalkingVengeance extends StalkingVengeanceBase {
  constructor(game) {
    super(game, "Stalking Vengeance", "Dissension", "DIS");
  }
}

module.exports = StalkingVengeance;

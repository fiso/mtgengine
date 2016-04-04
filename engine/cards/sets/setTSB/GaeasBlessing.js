"use strict";
const Constants = require ("../../../Constants");
const GaeasBlessingBase = require("../setpARL/GaeasBlessing");

class GaeasBlessing extends GaeasBlessingBase {
  constructor(game) {
    super(game, "Gaea's Blessing", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = GaeasBlessing;

"use strict";
const Constants = require ("../../../Constants");
const GaeasBlessingBase = require("../setDOM/GaeasBlessing");

class GaeasBlessing extends GaeasBlessingBase {
  constructor (game) {
    super(game, "Gaea's Blessing", "Magic Online Promos", "PRM");
  }
}

module.exports = GaeasBlessing;

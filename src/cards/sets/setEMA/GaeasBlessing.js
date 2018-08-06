"use strict";
const Constants = require ("../../../Constants");
const GaeasBlessingBase = require("../setpARL/GaeasBlessing");

class GaeasBlessing extends GaeasBlessingBase {
  constructor (game) {
    super(game, "Gaea's Blessing", "Eternal Masters", "EMA");
  }
}

module.exports = GaeasBlessing;

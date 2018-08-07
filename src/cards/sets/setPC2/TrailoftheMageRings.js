"use strict";
const Constants = require ("../../../Constants");
const TrailoftheMageRingsBase = require("../setPCA/TrailoftheMageRings");

class TrailoftheMageRings extends TrailoftheMageRingsBase {
  constructor (game) {
    super(game, "Trail of the Mage-Rings", "Planechase 2012", "PC2");
  }
}

module.exports = TrailoftheMageRings;

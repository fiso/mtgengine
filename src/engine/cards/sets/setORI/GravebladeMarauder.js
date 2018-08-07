"use strict";
const Constants = require ("../../../Constants");
const GravebladeMarauderBase = require("../setPORI/GravebladeMarauder");

class GravebladeMarauder extends GravebladeMarauderBase {
  constructor (game) {
    super(game, "Graveblade Marauder", "Magic Origins", "ORI");
  }
}

module.exports = GravebladeMarauder;

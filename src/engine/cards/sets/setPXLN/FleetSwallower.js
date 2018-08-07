"use strict";
const Constants = require ("../../../Constants");
const FleetSwallowerBase = require("../setXLN/FleetSwallower");

class FleetSwallower extends FleetSwallowerBase {
  constructor (game) {
    super(game, "Fleet Swallower", "Ixalan Promos", "PXLN");
  }
}

module.exports = FleetSwallower;

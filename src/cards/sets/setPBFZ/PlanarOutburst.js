"use strict";
const Constants = require ("../../../Constants");
const PlanarOutburstBase = require("../setBFZ/PlanarOutburst");

class PlanarOutburst extends PlanarOutburstBase {
  constructor (game) {
    super(game, "Planar Outburst", "Battle for Zendikar Promos", "PBFZ");
  }
}

module.exports = PlanarOutburst;

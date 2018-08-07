"use strict";
const Constants = require ("../../../Constants");
const PlanarBridgeBase = require("../setAER/PlanarBridge");

class PlanarBridge extends PlanarBridgeBase {
  constructor (game) {
    super(game, "Planar Bridge", "Kaladesh Inventions", "MPS");
  }
}

module.exports = PlanarBridge;

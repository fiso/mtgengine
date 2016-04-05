"use strict";
const Constants = require ("../../../Constants");
const PlanarPortalBase = require("../set8ED/PlanarPortal");

class PlanarPortal extends PlanarPortalBase {
  constructor(game) {
    super(game, "Planar Portal", "Invasion", "INV");
  }
}

module.exports = PlanarPortal;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PlanarPortalBase = require("../set8ED/PlanarPortal.js");

class PlanarPortal extends PlanarPortalBase {
  constructor(game) {
    super(game, "Planar Portal", "Invasion", "INV");
  }
}

module.exports = PlanarPortal;

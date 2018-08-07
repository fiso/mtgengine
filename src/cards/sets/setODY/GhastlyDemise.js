"use strict";
const Constants = require ("../../../Constants");
const GhastlyDemiseBase = require("../setWC02/GhastlyDemise");

class GhastlyDemise extends GhastlyDemiseBase {
  constructor (game) {
    super(game, "Ghastly Demise", "Odyssey", "ODY");
  }
}

module.exports = GhastlyDemise;

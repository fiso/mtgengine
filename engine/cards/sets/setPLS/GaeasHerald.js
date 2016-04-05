"use strict";
const Constants = require ("../../../Constants");
const GaeasHeraldBase = require("../setDPA/GaeasHerald");

class GaeasHerald extends GaeasHeraldBase {
  constructor(game) {
    super(game, "Gaea's Herald", "Planeshift", "PLS");
  }
}

module.exports = GaeasHerald;

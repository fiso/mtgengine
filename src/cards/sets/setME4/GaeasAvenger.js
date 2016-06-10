"use strict";
const Constants = require ("../../../Constants");
const GaeasAvengerBase = require("../setATQ/GaeasAvenger");

class GaeasAvenger extends GaeasAvengerBase {
  constructor (game) {
    super(game, "Gaea's Avenger", "Masters Edition IV", "ME4");
  }
}

module.exports = GaeasAvenger;

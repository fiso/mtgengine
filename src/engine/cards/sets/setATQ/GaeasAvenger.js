"use strict";
const Constants = require ("../../../Constants");
const GaeasAvengerBase = require("../setME4/GaeasAvenger");

class GaeasAvenger extends GaeasAvengerBase {
  constructor (game) {
    super(game, "Gaea's Avenger", "Antiquities", "ATQ");
  }
}

module.exports = GaeasAvenger;

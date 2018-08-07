"use strict";
const Constants = require ("../../../Constants");
const GaeasHeraldBase = require("../setDPA/GaeasHerald");

class GaeasHerald extends GaeasHeraldBase {
  constructor (game) {
    super(game, "Gaea's Herald", "Eighth Edition", "8ED");
  }
}

module.exports = GaeasHerald;

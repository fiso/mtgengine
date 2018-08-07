"use strict";
const Constants = require ("../../../Constants");
const GaeasHeraldBase = require("../setDPA/GaeasHerald");

class GaeasHerald extends GaeasHeraldBase {
  constructor (game) {
    super(game, "Gaea's Herald", "Tenth Edition", "10E");
  }
}

module.exports = GaeasHerald;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GaeasHeraldBase = require("../setDPA/GaeasHerald.js");

class GaeasHerald extends GaeasHeraldBase {
  constructor(game) {
    super(game, "Gaea's Herald", "Tenth Edition", "10E");
  }
}

module.exports = GaeasHerald;

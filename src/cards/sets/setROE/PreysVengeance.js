"use strict";
const Constants = require ("../../../Constants");
const PreysVengeanceBase = require("../setIMA/PreysVengeance");

class PreysVengeance extends PreysVengeanceBase {
  constructor (game) {
    super(game, "Prey's Vengeance", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = PreysVengeance;

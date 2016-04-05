"use strict";
const Constants = require ("../../../Constants");
const AkromasVengeanceBase = require("../setV13/AkromasVengeance");

class AkromasVengeance extends AkromasVengeanceBase {
  constructor(game) {
    super(game, "Akroma's Vengeance", "Planechase", "HOP");
  }
}

module.exports = AkromasVengeance;

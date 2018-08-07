"use strict";
const Constants = require ("../../../Constants");
const AkromasVengeanceBase = require("../setC18/AkromasVengeance");

class AkromasVengeance extends AkromasVengeanceBase {
  constructor (game) {
    super(game, "Akroma's Vengeance", "Onslaught", "ONS");
  }
}

module.exports = AkromasVengeance;

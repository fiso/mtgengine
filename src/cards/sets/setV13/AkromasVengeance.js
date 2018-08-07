"use strict";
const Constants = require ("../../../Constants");
const AkromasVengeanceBase = require("../setC18/AkromasVengeance");

class AkromasVengeance extends AkromasVengeanceBase {
  constructor (game) {
    super(game, "Akroma's Vengeance", "From the Vault: Twenty", "V13");
  }
}

module.exports = AkromasVengeance;

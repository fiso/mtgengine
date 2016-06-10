"use strict";
const Constants = require ("../../../Constants");
const TariffBase = require("../set6ED/Tariff");

class Tariff extends TariffBase {
  constructor (game) {
    super(game, "Tariff", "Weatherlight", "WTH");
  }
}

module.exports = Tariff;

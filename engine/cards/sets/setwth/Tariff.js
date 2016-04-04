"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TariffBase = require("../set6ED/Tariff.js");

class Tariff extends TariffBase {
  constructor(game) {
    super(game, "Tariff", "Weatherlight", "WTH");
  }
}

module.exports = Tariff;

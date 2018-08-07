"use strict";
const Constants = require ("../../../Constants");
const DrainLifeBase = require("../setPRM/DrainLife");

class DrainLife extends DrainLifeBase {
  constructor (game) {
    super(game, "Drain Life", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = DrainLife;

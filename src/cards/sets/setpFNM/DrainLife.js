"use strict";
const Constants = require ("../../../Constants");
const DrainLifeBase = require("../setBTD/DrainLife");

class DrainLife extends DrainLifeBase {
  constructor (game) {
    super(game, "Drain Life", "Friday Night Magic", "pFNM");
  }
}

module.exports = DrainLife;

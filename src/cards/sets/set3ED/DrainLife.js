"use strict";
const Constants = require ("../../../Constants");
const DrainLifeBase = require("../setBTD/DrainLife");

class DrainLife extends DrainLifeBase {
  constructor (game) {
    super(game, "Drain Life", "Revised Edition", "3ED");
  }
}

module.exports = DrainLife;

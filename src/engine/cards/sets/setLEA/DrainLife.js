"use strict";
const Constants = require ("../../../Constants");
const DrainLifeBase = require("../setPRM/DrainLife");

class DrainLife extends DrainLifeBase {
  constructor (game) {
    super(game, "Drain Life", "Limited Edition Alpha", "LEA");
  }
}

module.exports = DrainLife;

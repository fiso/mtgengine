"use strict";
const Constants = require ("../../../Constants");
const DrainLifeBase = require("../setPRM/DrainLife");

class DrainLife extends DrainLifeBase {
  constructor (game) {
    super(game, "Drain Life", "Summer Magic / Edgar", "SUM");
  }
}

module.exports = DrainLife;

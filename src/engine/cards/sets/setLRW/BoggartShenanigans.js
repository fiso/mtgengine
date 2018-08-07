"use strict";
const Constants = require ("../../../Constants");
const BoggartShenanigansBase = require("../setEVG/BoggartShenanigans");

class BoggartShenanigans extends BoggartShenanigansBase {
  constructor (game) {
    super(game, "Boggart Shenanigans", "Lorwyn", "LRW");
  }
}

module.exports = BoggartShenanigans;

"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BoggartShenanigansBase = require("../setDD3_EVG/BoggartShenanigans.js");

class BoggartShenanigans extends BoggartShenanigansBase {
  constructor(game) {
    super(game, "Boggart Shenanigans", "Lorwyn", "LRW");
  }
}

module.exports = BoggartShenanigans;

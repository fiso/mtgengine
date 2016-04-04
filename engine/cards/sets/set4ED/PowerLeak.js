"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PowerLeakBase = require("../setCED/PowerLeak.js");

class PowerLeak extends PowerLeakBase {
  constructor(game) {
    super(game, "Power Leak", "Fourth Edition", "4ED");
  }
}

module.exports = PowerLeak;

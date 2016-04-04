"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TempestEfreetBase = require("../set4ED/TempestEfreet.js");

class TempestEfreet extends TempestEfreetBase {
  constructor(game) {
    super(game, "Tempest Efreet", "Legends", "LEG");
  }
}

module.exports = TempestEfreet;
